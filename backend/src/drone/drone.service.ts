import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { StoreDTO, UpdateDTO } from 'src/models/drone.model';
import { InjectRepository } from '@nestjs/typeorm';
import { DroneEntity } from 'src/entities/drone.entity';
import { Repository } from 'typeorm';
import { Request } from 'express';

@Injectable()
export class DroneService {
  constructor(
    @InjectRepository(DroneEntity) private droneRepo: Repository<DroneEntity>,
  ) {}

  async getAll(request: Request) {
    const { query } = request;
    const { orderby = 'name', direction = 'ASC' } = query;
    const { name, fly, status } = query;
    const order: 'ASC' | 'DESC' = direction == 'DESC' ? 'DESC' : 'ASC';
    const page: number =
      Number(query.page) == 0 || query.page === undefined
        ? 1
        : Number(query.page);
    const offset = (page - 1) * 5;

    const { drones, total } = await this.queryBuildHandler(
      fly === undefined ? 0 : Number(fly),
      name === undefined ? '' : name.toString(),
      status === undefined ? '' : status.toString(),
      offset,
      orderby === undefined ? '' : orderby.toString(),
      order,
    );

    const serializedDrones = drones.map(drone => {
      return {
        ...drone,
        image: `http://localhost:${process.env.PORT}/files/${drone.image}`,
      };
    });

    let totalPages = Math.ceil(total / 5);
    return { total, page, totalPages, serializedDrones };
  }

  async saveDrone(data: StoreDTO, image: any) {
    try {
      const drone = this.droneRepo.create(data);
      if (image !== undefined) {
        drone.image = image.filename;
        await drone.save();
        drone.image = `http://localhost:${process.env.PORT}/files/${drone.image}`;
        return drone;
      }
      await drone.save();
      return drone;
    } catch (error) {
      throw new InternalServerErrorException(
        'favor verificar estrutura de dados',
      );
    }
  }

  async findById(id: number) {
    const drone = await this.droneRepo.findOne({ where: { id } });
    drone.image = `http://localhost:${process.env.PORT}/files/${drone.image}`;
    return drone;
  }

  async updateDrone(id: number, data: UpdateDTO, image: any) {
    try {
      if (image !== undefined) {
        //data.image = image.filename;
        await this.droneRepo.update({ id }, { ...data, image: image.filename });
        return await this.findById(id);
      } else {
        await this.droneRepo.update({ id }, { ...data });
        return await this.findById(id);
      }
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        'favor verificar estrutura de dados',
      );
    }
  }

  async deleteDrone(id: number) {
    const drone = await this.findById(id);
    await this.droneRepo.remove(drone);
  }

  async queryBuildHandler(
    fly: number,
    name: string,
    status: string,
    offset: number,
    orderBy: string,
    direction: 'ASC' | 'DESC' = 'ASC',
  ) {
    let queryBuild = await this.droneRepo
      .createQueryBuilder()
      .where('name like :name', {
        name: `%${name === undefined ? '' : name}%`,
      });
    if (fly !== NaN && Number(fly) !== 0) {
      queryBuild = queryBuild.andWhere(`fly = :fly`, { fly: Number(fly) });
    }
    if (status !== undefined && status !== '') {
      queryBuild = queryBuild.andWhere(`status = :status`, { status });
    }
    queryBuild = queryBuild
      .limit(5)
      .offset(offset)
      .orderBy(orderBy, direction);

    let totalQuery = await this.droneRepo
      .createQueryBuilder()
      .where('name like :name', {
        name: `%${name === undefined ? '' : name}%`,
      });
    if (fly !== NaN && Number(fly) !== 0) {
      totalQuery = totalQuery.andWhere(`fly = :fly`, { fly: Number(fly) });
    }
    if (status !== undefined && status !== '') {
      totalQuery = totalQuery.andWhere(`status = :status`, { status });
    }
    totalQuery = totalQuery
      .limit(5)
      .offset(offset)
      .orderBy(orderBy, direction);

    const drones = await queryBuild.getMany();
    const total = await totalQuery.getCount();

    return { drones, total };
  }
}
