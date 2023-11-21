import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxStripeModule } from 'ngx-stripe';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStripeModule.forRoot(environment.stripe.publicKey)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
