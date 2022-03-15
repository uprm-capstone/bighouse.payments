import { Injectable, Inject } from '@nestjs/common';
import { Stripe } from 'stripe';

import { ApartmentsService } from 'src/apartments/apartments.service';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject('STRIPE_CLIENT') private stripe: Stripe,
    private apartmentsService: ApartmentsService,
  ) {}
  createIntent(apartmentId: number) {
    return this.stripe.paymentIntents.create({
      amount: this.apartmentsService.getPrice(apartmentId),
      currency: 'usd',
    });
  }
}
