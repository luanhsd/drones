import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
  ValidationPipe,
  UseInterceptors,
  UploadedFile,
  Req,
  Res,
} from '@nestjs/common';
import { DroneService } from './drone.service';
import { StoreDTO, UpdateDTO } from '../models/drone.model';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import multer from '../config/multer';
import { Request } from 'express';

@Controller('drones')
export class DroneController {
  constructor(private droneService: DroneService) {}

  @Get()
  index(@Req() request: Request) {
    return this.droneService.getAll(request);
  }

  @Get('/:id')
  show(@Param('id') id: number) {
    return this.droneService.findById(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', multer))
  store(@Body(ValidationPipe) data: StoreDTO, @UploadedFile() image: any) {
    return this.droneService.saveDrone(data, image);
  }

  @Put('/:id')
  @UseInterceptors(FileInterceptor('image', multer))
  update(
    @Param('id') id: number,
    @Body(ValidationPipe) data: UpdateDTO,
    @UploadedFile() image: any,
  ) {
    return this.droneService.updateDrone(id, data, image);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.droneService.deleteDrone(id);
  }
}
