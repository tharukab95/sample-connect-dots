import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { AppState } from 'apps/tuition/src/app/reducers';
import { select, Store } from '@ngrx/store';
import {
  isLoggedIn,
  isLoggedOut,
} from 'libs/tuition/feature/auth/src/lib/+state/auth.selectors';
import {
  login,
  logout,
} from 'libs/tuition/feature/auth/src/lib/+state/auth.actions';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
@Component({
  selector: 'sample-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  loading = true;
  darkModeEnabled = false;

  isLoggedIn$: Observable<boolean> | undefined;
  isLoggedOut$: Observable<boolean> | undefined;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private titleService: Title,
    private store: Store<AppState>,
    private router: Router
  ) {
    // this.loading = false;
  }

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));

    this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));

    const access_token = localStorage.getItem('access_token');
    console.log('access_token', access_token);

    // if (access_token) {
    //   this.store.dispatch(login({ user_data: JSON.parse(access_token) }));
    // }

    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd: {
          this.loading = false;
          break;
        }
        case event instanceof NavigationCancel: {
          this.loading = false;
          break;
        }
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  logout() {
    this.store.dispatch(logout());
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  get title() {
    return this.titleService.getTitle();
  }

  switchTheme() {
    this.darkModeEnabled = !this.darkModeEnabled;
  }
}
