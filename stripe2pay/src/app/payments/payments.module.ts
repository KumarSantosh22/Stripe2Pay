import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { StripePayComponent } from './components/stripe-pay/stripe-pay.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './components/success/success.component';
import { FailureComponent } from './components/failure/failure.component';
import { PlugnpayComponent } from './components/plugnpay/plugnpay.component';


@NgModule({
  declarations: [
    StripePayComponent,
    SuccessComponent,
    FailureComponent,
    PlugnpayComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PaymentsModule { }
