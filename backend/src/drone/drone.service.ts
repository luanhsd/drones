import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { StoreDTO, UpdateDTO } from 'src/models/drone.model';
import { InjectRepository } from '@nestjs/typeorm';
import { DroneEntity } from 'src/entities/drone.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DroneService {
  constructor(
    @InjectRepository(DroneEntity) private droneRepo: Repository<DroneEntity>,
  ) {}

  async getAll() {
    const drones = await this.droneRepo.find();

    const serializedDrones = drones.map(drone => {
      return {
        id: drone.id,
        image: `http://localhost:${process.env.PORT}/files/${drone.image}`,
        name: drone.name,
        address: drone.address,
        battery: drone.battery,
        max_speed: drone.max_speed,
        average_speed: drone.average_speed,
        status: drone.status,
        fly: drone.fly,
      };
    });

    return serializedDrones;
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
}
