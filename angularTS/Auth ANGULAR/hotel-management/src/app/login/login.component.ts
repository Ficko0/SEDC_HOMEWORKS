import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notifications.service';
import { Router } from '@angular/router';
import { Auth } from '../../types/auth.interface';
import { NotificationType } from '../../types/notification-type.enum';
import { LoginRegisterComponent } from '../auth-form/login-register.component';
import { AddGuestComponent } from "../add-guest/add-guest.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginRegisterComponent, AddGuestComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly notificationService: NotificationService,
    private readonly router: Router
  ) {}

  login({ email, password }: Auth) {
    return this.authService.login(email, password).subscribe((response) => {
      if (!response) {
        this.notificationService.showNotification(
          'Invalid Credentials',
          '',
          NotificationType.Error
        );
        return;
      }

      this.notificationService.showNotification(
        'Succesfully Logged In',
        '',
        NotificationType.Success
      );
      this.router.navigate(['/']);
    });
  }
}
