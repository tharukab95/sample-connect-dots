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
import { SideNavComponent } from 'libs/tuition/ui/main-layout/src/lib/side-nav/side-nav.component';

const routes: Routes = [
  { path: '', redirectTo: 'sampleOrg', pathMatch: 'full' },
  { path: 'sampleOrg', component: SideNavComponent, children: [
    {
      path: 'courses',
      loadChildren: () => import(`@tuition/courses`).then(m => m.TuitionFeatureCoursesModule),
     },
  ] },
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    TuitionUiMainLayoutModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks : {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictActionSerializability: true,
          strictStateSerializability:true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
