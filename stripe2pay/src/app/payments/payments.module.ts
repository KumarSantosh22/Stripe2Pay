import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { StripePayComponent } from './components/stripe-pay/stripe-pay.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './components/success/success.component';
import { FailureComponent } from './components/failure/failure.component';
import { PlugnpayComponent } from './components/plugnpay/plugnpay.component';
import { StripePaymentComponent } from './components/stripe-payment/stripe-payment.component';


import {
  StripeCardComponent,
  StripeCardGroupDirective,
  StripeCardNumberComponent,
  StripeCardExpiryComponent,
  StripeCardCvcComponent
} from 'ngx-stripe'

@NgModule({
  declarations: [
    StripePayComponent,
    SuccessComponent,
    FailureComponent,
    PlugnpayComponent,
    StripePaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StripeCardComponent,
    StripeCardNumberComponent,
    StripeCardExpiryComponent,
    StripeCardCvcComponent,
    StripeCardGroupDirective

  ]
})
export class PaymentsModule { }
