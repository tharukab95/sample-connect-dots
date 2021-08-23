import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// import { loadScript } from '@paypal/paypal-js';

declare var paypal: any;

@Component({
  selector: 'paypal-pay',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss'],
})
export class PaypalComponent implements OnInit {
  @Input()
  iconUrl: string = '';

  @ViewChild('paypal', { static: true }) paypalElement: ElementRef | undefined;

  product = {
    price: 29.99,
    description: 'angular course',
    img: '',
  };

  paidFor = false;

  constructor() {}

  ngOnInit(): void {
    this.product.img = this.iconUrl;
    console.log(this.product.img);
    paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.product.price,
                },
              },
            ],
          });
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: (err: any) => {
          console.log(err);
        },
      })
      .render(this.paypalElement?.nativeElement);
  }

  // ngAfterViewChecked(): void {
  //   loadScript({
  //     'client-id':
  //       'AbIu03RBFlKV9HeMul9Z0viCZzdWTFuZqBeiB6iwwTNuRhTmVTd3pNtA3jl5zMuJIPrgZ7GZz0pdH3gC',
  //     currency: 'EUR',
  //   })
  //     .then((paypal) => {
  //       paypal.Buttons().render('#paypal');
  //     })
  //     .catch((err) => {
  //       console.error('failed to load the PayPal JS SDK script', err);
  //     });
  // }
}
