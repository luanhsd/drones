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

export class StoreDTO {
  @IsEmpty({ message: 'campo id não pode ser preenchido!' })
  id: number;

  @IsOptional()
  @IsString({ message: 'campo image precisa ser uma string' })
  image: string;

  @IsNotEmpty({ message: 'campo name obrigatório' })
  @IsString({ message: 'campo name precisa ser uma string' })
  name: string;

  @IsNotEmpty({ message: 'campo address obrigatório' })
  @IsString({ message: 'campo address precisa ser uma string' })
  address: string;

  @IsInt({ message: 'campo battery precisa ser um número inteiro' })
  @Min(0, { message: 'campo battery precisa ser no mínimo 0' })
  @Max(100, { message: 'campo battery precisa ser no máxio 100' })
  battery = 0;

  @IsNumber({}, { message: 'campo max_speed precisa ser um número' })
  max_speed = 0.0;

  @IsNumber({}, { message: 'campo average_speed precisa ser um número' })
  average_speed = 0.0;

  @IsString({ message: 'campo status precisa ser uma string' })
  status = 'offline';

  @IsInt({ message: 'campo fly precisa ser um número inteiro' })
  fly = 0;
}

export class UpdateDTO {
  @IsEmpty({ message: 'campo id não pode ser preenchido!' })
  id: number;

  @IsOptional()
  @IsString({ message: 'campo image precisa ser uma string' })
  image: string;

  @IsNotEmpty({ message: 'campo name obrigatório' })
  @IsString({ message: 'campo name precisa ser uma string' })
  @IsOptional()
  name: string;

  @IsNotEmpty({ message: 'campo address obrigatório' })
  @IsString({ message: 'campo address precisa ser uma string' })
  @IsOptional()
  address: string;

  @IsInt({ message: 'campo battery precisa ser um número inteiro' })
  @Min(0, { message: 'campo battery precisa ser no mínimo 0' })
  @Max(100, { message: 'campo battery precisa ser no máxio 100' })
  @IsOptional()
  battery = 0;

  @IsNumber({}, { message: 'campo max_speed precisa ser um número' })
  @IsOptional()
  max_speed = 0.0;

  @IsNumber({}, { message: 'campo average_speed precisa ser um número' })
  @IsOptional()
  average_speed = 0.0;

  @IsString({ message: 'campo status precisa ser uma string' })
  @IsOptional()
  status = 'offline';

  @IsInt({ message: 'campo fly precisa ser um número inteiro' })
  @IsOptional()
  fly = 0;
}

//export class SearchDTO {}
