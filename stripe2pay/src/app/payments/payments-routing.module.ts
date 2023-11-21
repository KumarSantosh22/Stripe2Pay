import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StripePayComponent } from './components/stripe-pay/stripe-pay.component';
import { SuccessComponent } from './components/success/success.component';
import { FailureComponent } from './components/failure/failure.component';
import { PlugnpayComponent } from './components/plugnpay/plugnpay.component';

const routes: Routes = [
  {
    path: '', component: StripePayComponent
  },
  {
    path: 'pnp', component: PlugnpayComponent
  },
  {
    path: 'success', component: SuccessComponent
  },
  {
    path: 'falure', component: FailureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
