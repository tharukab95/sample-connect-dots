import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-pricing-plans',
  templateUrl: './pricing-plans.component.html',
  styleUrls: ['./pricing-plans.component.scss'],
})
export class PricingPlansComponent implements OnInit {
  plans = [
    {
      name: 'Basic',
      currency: '$',
      amount: '20',
      href: '/home',
      features: ['basic feature 1', 'basic feature 2', 'basic feature 3'],
    },
    {
      name: 'Standard',
      currency: '$',
      amount: '50',
      href: '/home',
      features: [
        'standard feature 1',
        'standard feature 2',
        'standard feature 3',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
