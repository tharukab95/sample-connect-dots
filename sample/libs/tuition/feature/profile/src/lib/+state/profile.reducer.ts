import { Action, createReducer, on } from '@ngrx/store';
import * as ProfileActions from './profile.actions';

export const profileFeatureKey = 'profile';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(ProfileActions.loadProfiles, state => state),

);

