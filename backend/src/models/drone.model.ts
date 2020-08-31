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
  id: number;

  @IsNotEmpty({ message: 'campo nome obrigatório' })
  @IsString({ message: 'campo nome inválido' })
  name: string;

  @IsNotEmpty({ message: 'campo endereço obrigatório' })
  @IsString({ message: 'campo endereço inválido' })
  address: string;

  @IsInt({ message: 'campo bateria precisa ser um número inteiro' })
  @Min(0, { message: 'campo bateria precisa ser no mínimo 0' })
  @Max(100, { message: 'campo bateria precisa ser no máxio 100' })
  @Type(() => Number)
  battery = 0;

  @IsNumber({}, { message: 'campo velocidade máxima precisa ser um número' })
  @Type(() => Number)
  max_speed = 0.0;

  @IsNumber({}, { message: 'campo velocidade média precisa ser um número' })
  @Type(() => Number)
  average_speed = 0.0;

  @IsString({ message: 'campo status inválido' })
  status = 'offline';

  //@IsInt({ message: 'campo fly precisa ser um número inteiro' })
  @IsNumber({},{message:"campo voo atual precisa ser um número inteiro"})
  @Min(0,{ message: 'campo voo atual precisa ser no mínimo 0' })
  @Max(100, { message: 'campo voo atual precisa ser no máxio 100' })
  @Type(() => Number)
  fly = 0;
  
}

export class UpdateDTO {
  @IsEmpty({ message: 'campo id não pode ser preenchido!' })
  id: number;

  @IsNotEmpty({ message: 'campo name obrigatório' })
  @IsString({ message: 'campo name precisa ser uma string' })
  @IsOptional()
  name: string;

  @IsNotEmpty({ message: 'campo address obrigatório' })
  @IsString({ message: 'campo address precisa ser uma string' })
  @IsOptional()
  address: string;

  @IsInt({ message: 'campo bateria precisa ser um número inteiro' })
  @Min(0, { message: 'campo bateria precisa ser no mínimo 0' })
  @Max(100, { message: 'campo bateria precisa ser no máxio 100' })
  @Type(() => Number)
  @IsOptional()
  battery = 0;

  @IsNumber({}, { message: 'campo velocidade máxima precisa ser um número' })
  @Type(() => Number)
  @IsOptional()
  max_speed = 0.0;

  @IsNumber({}, { message: 'campo velocidade média precisa ser um número' })
  @Type(() => Number)
  @IsOptional()
  average_speed = 0.0;

  @IsString({ message: 'campo status inválido' })
  status = 'offline';

  @IsNumber({},{message:"campo voo atual precisa ser um número inteiro"})
  @Min(0,{ message: 'campo voo atual precisa ser no mínimo 0' })
  @Max(100, { message: 'campo voo atual precisa ser no máxio 100' })
  @Type(() => Number)
  @IsOptional()
  fly = 0;
}

//export class SearchDTO {}
