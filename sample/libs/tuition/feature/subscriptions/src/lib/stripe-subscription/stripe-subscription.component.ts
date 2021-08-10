import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { StripeSubscriptionService } from '../services/stripe-subscription.service';

@Component({
  selector: 'sample-stripe-subscription',
  template: `
    <ng-container>

    </ng-container>
  `,
})
export class StripeSubscriptionComponent implements OnInit {

  subscriptions$?: Observable<HTMLCanvasElement>;

  constructor(private subscriptionService: StripeSubscriptionService) { }

  ngOnInit() {
    

  }

}
