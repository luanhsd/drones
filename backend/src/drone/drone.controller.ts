import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { DroneService } from './drone.service';
import { StoreDTO, UpdateDTO } from '../models/drone.model';

@Controller('drones')
export class DroneController {
  constructor(private droneService: DroneService) {}

  @Get()
  index() {}

  @Get('/:id')
  show(@Param('id') id: number) {
    return this.droneService.findById(id);
  }

  @Post()
  store(@Body(ValidationPipe) data: StoreDTO) {
    return this.droneService.save(data);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body(ValidationPipe) data: UpdateDTO) {
    return this.droneService.update(id, data);
  }

  @Delete('/:id')
  delete(@Param('/:id') id: number) {}
}
