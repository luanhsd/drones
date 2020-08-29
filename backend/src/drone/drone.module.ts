import { Module } from '@nestjs/common';
import { DroneService } from './drone.service';
import { DroneController } from './drone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DroneEntity } from 'src/entities/drone.entity';
import { MulterModule } from '@nestjs/platform-express';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forFeature([DroneEntity]),
    MulterModule.register({
      dest: path.resolve(__dirname, '..', '..', 'uploads'),
    }),
  ],
  providers: [DroneService],
  controllers: [DroneController],
})
export class DroneModule {}
