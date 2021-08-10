
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StripeSubscriptionService {

  constructor(private http:HttpClient) {

  }

  createCheckout(): Observable<String> {
      return this.http.get<any>('/api/subscriptions')
          .pipe(
              map(res => res)
          );
  }

}








