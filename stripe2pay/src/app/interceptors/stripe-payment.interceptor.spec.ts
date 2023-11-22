import { TestBed } from '@angular/core/testing';

import { StripePaymentInterceptor } from './stripe-payment.interceptor';

describe('StripePaymentInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StripePaymentInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: StripePaymentInterceptor = TestBed.inject(StripePaymentInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
