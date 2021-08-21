import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs/operators';
import { noop } from 'rxjs';
import { Router } from '@angular/router';
import { AppState } from 'apps/tuition/src/app/reducers/index';
import { login } from '../../+state/auth.actions';
import { LoginResponseDto } from '../../models/login-response.dto';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.form = fb.group({
      email: ['tharukabandara95@gmail.com', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  login() {
    const val = this.form.value;

    this.auth
      .login(val.email, val.password)
      .pipe(
        tap((userAccessData: LoginResponseDto) => {
          console.log(userAccessData);

          this.store.dispatch(login(userAccessData));

          this.router.navigateByUrl('courses');
        })
      )
      .subscribe(noop, () => alert('Login Failed'));
  }
}