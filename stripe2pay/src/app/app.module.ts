import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxStripeModule } from 'ngx-stripe';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StripePaymentInterceptor } from './interceptors/stripe-payment.interceptor';

import { provideNgxStripe } from 'ngx-stripe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxStripeModule.forRoot(environment.stripe.publicKey)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StripePaymentInterceptor,
      multi: true
    },
    provideNgxStripe(environment.stripe.publicKey)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
