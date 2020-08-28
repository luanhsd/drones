import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsNumber,
  Min,
  Max,
} from 'class-validator';

export class StoreDTO {
  @IsNotEmpty({ message: 'campo image obrigatório' })
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

  @IsNumber({}, { message: 'campo battery precisa ser um número' })
  max_speed = 0.0;

  @IsNumber({}, { message: 'campo battery precisa ser um número' })
  average_speed = 0.0;

  @IsString({ message: 'campo status precisa ser uma string' })
  status = 'offline';

  @IsInt({ message: 'campo fly precisa ser um número inteiro' })
  fly = 0;
}

export class UpdateDTO {}

//export class SearchDTO {}
