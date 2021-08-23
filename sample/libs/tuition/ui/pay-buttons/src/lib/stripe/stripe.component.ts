import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stripe-pay',
  template: `
    <p>
      stripe works!
    </p>
  `,
  styles: [
  ]
})
export class StripeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
