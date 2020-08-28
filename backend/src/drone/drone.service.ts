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
    return drones;
  }

  async saveDrone(data: StoreDTO) {
    try {
      const drone = this.droneRepo.create(data);
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
    return drone;
  }

  async updateDrone(id: number, data: UpdateDTO) {
    const drone = await this.findById(id);
    await this.droneRepo.update({ id }, data);
    return await this.findById(id);
  }

  async deleteDrone(id: number) {
    const drone = await this.findById(id);
    await this.droneRepo.remove(drone);
  }
}
