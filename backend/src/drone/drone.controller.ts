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
} from '@nestjs/common';
import { DroneService } from './drone.service';
import { StoreDTO, UpdateDTO } from '../models/drone.model';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import multer from '../config/multer';
import { Request } from 'express';
import { ApiOkResponse, ApiCreatedResponse, ApiQuery } from '@nestjs/swagger';

@Controller('drones')
export class DroneController {
  constructor(private droneService: DroneService) {}

  @Get()
  @ApiOkResponse({ description: 'Listagem de Drones' })
  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'name', type: String, required: false })
  @ApiQuery({ name: 'fly', type: Number, required: false })
  @ApiQuery({
    name: 'status',
    type: String,
    required: false,
    enum: ['success', 'delayed', 'flying', 'fail', 'offline', 'charging'],
  })
  @ApiQuery({
    name: 'orderby',
    type: String,
    required: false,
    enum: [
      'id',
      'name',
      'address',
      'battery',
      'max_speed',
      'average_speed',
      'status',
      'fly',
    ],
  })
  @ApiQuery({
    name: 'direction',
    type: String,
    required: false,
    enum: ['ASC', 'DESC'],
  })
  index(@Req() request: Request) {
    return this.droneService.getAll(request);
  }

  @Get('/:id')
  @ApiOkResponse({ description: 'Detalhes do Drone' })
  show(@Param('id') id: number) {
    return this.droneService.findById(id);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Inserção de um novo Drone' })
  @UseInterceptors(FileInterceptor('image', multer))
  store(@Body(ValidationPipe) data: StoreDTO, @UploadedFile() image: any) {
    return this.droneService.saveDrone(data, image);
  }

  @Put('/:id')
  @ApiOkResponse({ description: 'Atualização dos dados do Drone' })
  @UseInterceptors(FileInterceptor('image', multer))
  update(
    @Param('id') id: number,
    @Body(ValidationPipe) data: UpdateDTO,
    @UploadedFile() image: any,
  ) {
    return this.droneService.updateDrone(id, data, image);
  }

  @Delete('/:id')
  @ApiOkResponse({ description: 'Exclusão do Drone' })
  delete(@Param('id') id: number) {
    return this.droneService.deleteDrone(id);
  }
}
