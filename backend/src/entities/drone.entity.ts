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

  @Column({ name: 'max_speed', default: 0.0 })
  maxSpeed: Number;

  @Column({ name: 'average_speed', default: 0.0 })
  averageSpeed: Number;

  @Column({ default: 'offline' })
  status: string;

  @Column({ default: 0 })
  fly: Number;

  toJSON() {
    return classToPlain(this);
  }
}
