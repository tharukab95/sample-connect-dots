import { createAction, props } from '@ngrx/store';
import { LoginResponseDto } from '../models/login-response.dto';

export const login = createAction(
  '[Login Page] User Login',
  props<LoginResponseDto>()
);

export const logout = createAction('[Top Menu] Logout');
