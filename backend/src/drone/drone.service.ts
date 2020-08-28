import { Injectable } from '@nestjs/common';
import { StoreDTO } from 'src/models/drone.model';

@Injectable()
export class DroneService {
  private mockDrone = {
    id: 1,
    image: 'https://robohash.org/verovoluptatequia.jpg',
    name: 'Suzann',
    address: '955 Springview Junction',
    battery: 90,
    max_speed: 3.8,
    average_speed: 11.6,
    status: 'failed',
    fly: 94,
  };

  save(data: StoreDTO) {
    return this.mockDrone;
  }
}
