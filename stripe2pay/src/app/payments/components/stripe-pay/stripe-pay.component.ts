import { Component, OnInit } from '@angular/core';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-stripe-pay',
  templateUrl: './stripe-pay.component.html',
  styleUrls: ['./stripe-pay.component.scss']
})
export class StripePayComponent implements OnInit {
  title = 'angular-stripe';
  stripePromise!:Promise<Stripe | null>;

  priceId = 'price_1OEWnPSG5xD30nhKTT4O3OyE';
  quantity = 1;
  product = {
    title: 'Classic Peace Lily',
    subTitle: 'Popular House Plant',
    description: 'Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.',
    price: 18.00
  };

  ngOnInit(): void {
    console.log('k', environment.stripe.publicKey);

    this.stripePromise = loadStripe(environment.stripe.publicKey);
    this.stripePromise.then((d:any) => console.log('ddd', d));

  }


  async checkout() {
    // Call your backend to create the Checkout session.

    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await this.stripePromise;
    const { error } = await stripe!.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price: this.priceId, quantity: this.quantity }],
      successUrl: `${window.location.href}success`,
      cancelUrl: `${window.location.href}failure`,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    if (error) {
      console.log('-----------errror', error);
    }

  }
}
