import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { metaReducers, reducers } from './reducers';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { TuitionUiMainLayoutModule } from '@sample/main-layout';
import { HttpClientModule } from '@angular/common/http';
import { SideNavComponent } from 'libs/tuition/ui/main-layout/src/lib/side-nav/side-nav.component';
import { AuthGuard } from 'libs/tuition/feature/auth/src/lib/auth.guard';
import { LoginComponent } from 'libs/tuition/feature/auth/src/lib/components/login/login.component';
import { RegisterComponent } from 'libs/tuition/feature/auth/src/lib/components/register/register.component';
import { HomeComponent } from 'libs/tuition/ui/main-layout/src/lib/home/home.component';
import { AuthHomeComponent } from 'libs/tuition/feature/auth/src/lib/components/auth-home/auth-home.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthHomeComponent,
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'courses',
        loadChildren: () =>
          import(`@tuition/courses`).then((m) => m.TuitionFeatureCoursesModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'home',
        loadChildren: () =>
          import(`@tuition/profile`).then((m) => m.TuitionFeatureProfileModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'subscriptions',
        loadChildren: () =>
          import(`@tuition/subscriptions`).then(
            (m) => m.TuitionFeatureSubscriptionsModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    TuitionUiMainLayoutModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
