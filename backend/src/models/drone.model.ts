import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class StoreDTO {
  @IsEmpty({ message: 'campo id não pode ser preenchido!' })
  @ApiProperty({ type: Number, description: 'id' })
  id: number;

  @IsNotEmpty({ message: 'campo nome obrigatório' })
  @IsString({ message: 'campo nome inválido' })
  @ApiProperty({ type: String, description: 'name' })
  name: string;

  @IsNotEmpty({ message: 'campo endereço obrigatório' })
  @IsString({ message: 'campo endereço inválido' })
  @ApiProperty({ type: String, description: 'address' })
  address: string;

  @IsInt({ message: 'campo bateria precisa ser um número inteiro' })
  @Min(0, { message: 'campo bateria precisa ser no mínimo 0' })
  @Max(100, { message: 'campo bateria precisa ser no máximo 100' })
  @Type(() => Number)
  @ApiProperty({ type: Number, description: 'battery' })
  battery = 0;

  @IsNumber({}, { message: 'campo velocidade máxima precisa ser um número' })
  @Type(() => Number)
  @ApiProperty({ type: Number, description: 'max_speed' })
  max_speed = 0.0;

  @IsNumber({}, { message: 'campo velocidade média precisa ser um número' })
  @Type(() => Number)
  @ApiProperty({ type: Number, description: 'average_speed' })
  average_speed = 0.0;

  @IsString({ message: 'campo status inválido' })
  @ApiProperty({
    type: String,
    description: 'status [success, delayed, flying, fail, offline, charging]',
  })
  status = 'offline';

  //@IsInt({ message: 'campo fly precisa ser um número inteiro' })
  @IsNumber({}, { message: 'campo voo atual precisa ser um número inteiro' })
  @Min(0, { message: 'campo voo atual precisa ser no mínimo 0' })
  @Max(100, { message: 'campo voo atual precisa ser no máxio 100' })
  @Type(() => Number)
  @ApiProperty({ type: Number, description: 'fly' })
  fly = 0;
}

export class UpdateDTO {
  @IsEmpty({ message: 'campo id não pode ser preenchido!' })
  @ApiProperty({ type: Number, description: 'id' })
  id: number;

  @IsNotEmpty({ message: 'campo name obrigatório' })
  @IsString({ message: 'campo name precisa ser uma string' })
  @IsOptional()
  @ApiProperty({ type: String, description: 'name' })
  name: string;

  @IsNotEmpty({ message: 'campo address obrigatório' })
  @IsString({ message: 'campo address precisa ser uma string' })
  @IsOptional()
  @ApiProperty({ type: String, description: 'address' })
  address: string;

  @IsInt({ message: 'campo bateria precisa ser um número inteiro' })
  @Min(0, { message: 'campo bateria precisa ser no mínimo 0' })
  @Max(100, { message: 'campo bateria precisa ser no máxio 100' })
  @Type(() => Number)
  @IsOptional()
  @ApiProperty({ type: Number, description: 'battery' })
  battery = 0;

  @IsNumber({}, { message: 'campo velocidade máxima precisa ser um número' })
  @Type(() => Number)
  @IsOptional()
  @ApiProperty({ type: Number, description: 'max_speed' })
  max_speed = 0.0;

  @IsNumber({}, { message: 'campo velocidade média precisa ser um número' })
  @Type(() => Number)
  @IsOptional()
  @ApiProperty({ type: Number, description: 'average_speed' })
  average_speed = 0.0;

  @IsString({ message: 'campo status inválido' })
  @ApiProperty({
    type: String,
    description: 'status [success, delayed, flying, fail, offline, charging]',
  })
  status = 'offline';

  @IsNumber({}, { message: 'campo voo atual precisa ser um número inteiro' })
  @Min(0, { message: 'campo voo atual precisa ser no mínimo 0' })
  @Max(100, { message: 'campo voo atual precisa ser no máxio 100' })
  @Type(() => Number)
  @IsOptional()
  @ApiProperty({ type: Number, description: 'fly' })
  fly = 0;
}

//export class SearchDTO {}
