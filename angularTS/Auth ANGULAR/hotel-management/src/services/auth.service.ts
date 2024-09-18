import { Injectable, signal } from '@angular/core';
import { User } from '../types/user.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationService } from './notifications.service';
import { Auth } from '../types/auth.interface';
import { catchError, of, tap } from 'rxjs';
import { NotificationType } from '../types/notification-type.enum';
import { AuthResponse } from '../types/auth-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authPath = `http://localhost:3000/api/auth`;
  usersPath = `http://localhost:3000/api/users`;

  isAuth = signal<boolean>(false);
  currentUser = signal<User | null>(null);

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly notificationService: NotificationService
  ) {
    this.isAuth.set(!!this.#getToken('access'));
  }
  register(email: string, password: string) {
    return this.http
      .post<Auth>(`${this.authPath}/register`, {
        email,
        password,
      })
      .pipe(
        catchError((error) => {
          this.notificationService.showNotification(
            error.error.message,
            '',
            NotificationType.Error
          );
          return of(null);
        })
      );
  }

  login(email: string, password: string) {
    // login the user with the given details
    return (
      this.http
        .post<AuthResponse>(`${this.authPath}/login`, {
          email,
          password,
        })
        // Set the tokens of the logged user
        .pipe(
          tap((response) => {
            this.#setToken(response.token, 'access');
            this.#setToken(response.refreshToken, 'refresh');
            this.isAuth.set(true);

            // Set the current user to the userData that is sent
            const userData = {
              email: response.email,
              role: response.role,
            };

            this.currentUser.set(userData);
          }),
          catchError((error) => {
            this.notificationService.showNotification(
              error.error.message,
              '',
              NotificationType.Error
            );
            return of(null);
          })
        )
    );
  }

  logout() {
    // Set the auth of the user to false
    this.isAuth.set(false);

    // Remove the tokens
    this.#removeToken('access');
    this.#removeToken('refresh');

    // Set the current user to null
    this.currentUser.set(null);

    // Navigate to the login page
    this.router.navigate(['/login']);
  }

  refreshToken() {
    // Get the refresh token
    const refreshToken = this.#getToken('refresh');

    // If it doesn't exist, set the auth to false and the current user to null
    if (!refreshToken) {
      this.isAuth.set(false);

      this.currentUser.set(null);

      return of(null);
    }
    // Post method to create a new refresh token
    return this.http.post<any>(`${this.authPath}/refresh-token`, refreshToken);
  }

  // These are read-only functions
  #setToken(token: string, type: 'access' | 'refresh' = 'access') {
    localStorage.setItem(type, token);
  }

  #getToken(type: 'access' | 'refresh' = 'access') {
    return localStorage.getItem(type);
  }

  #removeToken(type: 'access' | 'refresh' = 'access') {
    localStorage.removeItem(type);
  }
}
