import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponse } from '../types/auth-response.interface';
import { User } from '../types/user.interface';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authPath: string = `http://localhost:3000/api/auth`;
  userPath: string = `http://localhost:3000/api/users`;

  isAuth = signal<boolean>(false);
  currentUser = signal<User | null>(null);

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  #setToken(token: string, type: 'access' | 'refresh' = 'access') {
    localStorage.setItem(type, token);
  }

  #getToken(type: 'access' | 'refresh' = 'access') {
    localStorage.getItem(type);
  }

  #removeToken(type: 'access' | 'refresh' = 'access') {
    localStorage.removeItem(type);
  }

  register(email: string, password: string) {
    return this.http
      .post<User>(`${this.authPath}/register`, {
        email,
        password,
      })
      .pipe(
        catchError((err) => {
          console.log(`Error: ${err}`);
          return of(null);
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponse>(`${this.authPath}/login`, {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          this.#setToken(response.token, 'access');
          this.#setToken(response.refreshToken, 'refresh');
          this.isAuth.set(true);

          const userData = {
            email: response.email,
            role: response.role,
          };

          this.currentUser.set(userData);
        }),
        catchError((err) => {
          console.log(`Error: ${err}`);
          return of(null);
        })
      );
  }

  logout() {
    this.isAuth.set(false);
    this.#removeToken('access');
    this.#removeToken('refresh');
    this.currentUser.set(null);

    this.router.navigate(['/login']);
  }

  refreshToken() {
    const refreshToken = this.#getToken('refresh');

    if (!String(refreshToken)) {
      this.isAuth.set(false);
      this.currentUser.set(null);
      return of(null);
    }

    return this.http.post<any>(`${this.authPath}/refresh-token`, {
      refreshToken,
    });
  }
}
