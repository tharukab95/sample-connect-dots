import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NgrxFormsEffects } from './+state/ngrx-forms.effects';
import { NgrxFormsFacade } from './+state/ngrx-forms.facade';
import { ngrxFormsInitialState, ngrxFormsReducer, ngrxFormsFeatureKey } from './+state/ngrx-forms.reducer';
import { DynamicFieldDirective } from './dynamic-form/dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { InputComponent } from './fields/input/input.component';
import { TextareaComponent } from './fields/textarea/textarea.component';
import { ListErrorsComponent } from './list-errors/list-errors.component';


export const sharedUiReactiveFormRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    StoreModule.forFeature(ngrxFormsFeatureKey, ngrxFormsReducer, {
     initialState: ngrxFormsInitialState,
    }),
    ReactiveFormsModule,
    StoreModule.forFeature(ngrxFormsFeatureKey, ngrxFormsReducer, {
      initialState: ngrxFormsInitialState,
    }),
    EffectsModule.forFeature([NgrxFormsEffects]),
  ]
})
export class SharedUiReactiveFormModule {}
