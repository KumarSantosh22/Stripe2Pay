import { Component, OnInit, ViewChild, inject, ɵConsole } from '@angular/core';
import { FormGroup, FormBuilder, Validators, UntypedFormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { StripeService, StripeCardNumberComponent, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
  PaymentIntent,
} from '@stripe/stripe-js';

import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.scss']
})
export class StripePaymentComponent {
  @ViewChild(StripeCardNumberComponent) card!: StripeCardNumberComponent;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };

  stripeTest!: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private stripeService: StripeService
  ) { }

  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      name: ['NGX-Stripe-Test'],
      amount: [1001],
    });
  }

  pay(): void {
    // alert(this.stripeTest.valid);
    console.log(this.stripeTest)
    if (this.stripeTest.valid) {
      this.createPaymentIntent(this.stripeTest.get('amount')?.value)
        .pipe(
          switchMap((pi) =>
            this.stripeService.confirmCardPayment(pi.client_secret || '', {
              payment_method: {
                card: this.card.element,
                billing_details: {
                  name: this.stripeTest.get('name')?.value,
                },
              },
            })
          )
        )
        .subscribe((result) => {
          console.log('intent----', result);
          if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result.error.message);
          } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
              // Show a success message to your customer
            }
          }
        });
    } else {
      console.log(this.stripeTest);
    }
  }

  createPaymentIntent(amount: number): Observable<PaymentIntent> {
    return this.http.post<PaymentIntent>(
      `${env.apiUrl}/Stripes/CreatePaymentIntent`,
      { amount }
    );
  }
}
