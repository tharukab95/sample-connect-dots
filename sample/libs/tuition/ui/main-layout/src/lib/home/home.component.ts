import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'apps/tuition/src/app/reducers';
import { login } from 'libs/tuition/feature/auth/src/lib/+state/auth.actions';
import { selectAuthState } from 'libs/tuition/feature/auth/src/lib/+state/auth.selectors';
@Component({
  selector: 'sample-layout-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoggedIn$: boolean | undefined;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.isLoggedIn$ = !!localStorage.getItem('access_token');
  }
}
