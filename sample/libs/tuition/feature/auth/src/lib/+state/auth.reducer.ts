import {
  createReducer,
  on,
} from '@ngrx/store';
import { LoginResponseDto } from '../model/login-response.dto';
import { AuthActions } from './action-types';


export interface AuthState {
  userAccessData: LoginResponseDto | null;
}

export const initialAuthState: AuthState = {
  userAccessData: null,
};

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state, action) => {
    return {
      userAccessData: action,
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      userAccessData: null,
    };
  })
);
