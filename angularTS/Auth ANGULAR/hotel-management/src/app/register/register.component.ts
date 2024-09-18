import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notifications.service';
import { Router } from '@angular/router';
import { LoginRegisterComponent } from '../auth-form/login-register.component';
import { NotificationType } from '../../types/notification-type.enum';
import { Auth } from '../../types/auth.interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LoginRegisterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly notificationService: NotificationService,
    private router: Router
  ) {}

  register({ email, password }: Auth) {
    return this.authService.register(email, password).subscribe((response) => {
      if (!response) {
        this.notificationService.showNotification(
          'Invalid Credentials',
          '',
          NotificationType.Error
        );
        return;
      }

      this.notificationService.showNotification(
        'Succesfully Registered',
        '',
        NotificationType.Success
      );

      this.router.navigate(['/login']);
    });
  }
}
