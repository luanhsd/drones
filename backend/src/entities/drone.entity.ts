import { AbstractEntity } from './abstract.entity';
import { Entity, Column } from 'typeorm';
import { classToPlain } from 'class-transformer';

@Entity('drones')
export class DroneEntity extends AbstractEntity {
  @Column({ default: null, nullable: true })
  image: string | null;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ default: 0 })
  battery: Number;

  @Column({
    type: 'decimal',
    name: 'max_speed',
    default: 0.0,
    precision: 5,
    scale: 1,
  })
  max_speed: Number;

  @Column({
    type: 'decimal',
    name: 'average_speed',
    default: 0.0,
    precision: 5,
    scale: 1,
  })
  average_speed: Number;

  @Column({ default: 'offline' })
  status: string;

  @Column({ default: 0 })
  fly: Number;

  toJSON() {
    return classToPlain(this);
  }
}
