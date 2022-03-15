import { Module } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';

@Module({
  providers: [ApartmentsService],
  exports: [ApartmentsService],
})
export class ApartmentsModule {}
