import { Injectable } from '@nestjs/common';

@Injectable()
export class ApartmentsService {
  getPrice(apartmentId: number): number {
    return apartmentId * 100;
  }
}
