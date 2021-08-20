import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../models/user';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<User>('/api/auth/login', {
      email: email,
      password: password,
    });
  }

  register(user: User) {
    return this.http.post<any>('/api/users', user).pipe(
      tap((user) => console.log(user)),
      map((user) => user)
    );
  }
}
