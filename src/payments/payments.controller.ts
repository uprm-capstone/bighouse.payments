import { Controller, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post('/checkout')
  async createIntent() {
    const paymentIntent = await this.paymentsService.createIntent(1);
    return {
      clientSecret: paymentIntent.client_secret,
    };
  }
}
