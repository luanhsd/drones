import { Module } from '@nestjs/common';
import { DroneService } from './drone.service';
import { DroneController } from './drone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DroneEntity } from 'src/entities/drone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DroneEntity])],
  providers: [DroneService],
  controllers: [DroneController],
})
export class DroneModule {}
