import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { StoreDTO } from 'src/models/drone.model';
import { InjectRepository } from '@nestjs/typeorm';
import { DroneEntity } from 'src/entities/drone.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DroneService {
  constructor(
    @InjectRepository(DroneEntity) private droneRepo: Repository<DroneEntity>,
  ) {}

  async save(data: StoreDTO) {
    console.log(data);
    try {
      const drone = this.droneRepo.create(data);
      await drone.save();
      return drone;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
