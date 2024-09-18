import { Component, computed, input, OnDestroy, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NotificationService } from '../../services/notifications.service';
import { NotificationType } from '../../types/notification-type.enum';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatLabel,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css',
})
export class LoginRegisterComponent implements OnDestroy {
  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private notificationService: NotificationService) {}

  // inject(NotifactionService)

  type = input<'Login' | 'Register'>('Login');

  onSubmit = output<{ email: string; password: string }>();

  oppositeType = computed(() => {
    this.type() === 'Login' ? 'Register' : 'Login';
  });

  submitForm() {
    const { email, password } = this.authForm.value;

    if (this.authForm.invalid || !email || !password) {
      this.notificationService.showNotification(
        'Invalid Credentials',
        'Submit',
        NotificationType.Error
      );
      return;
    }

    this.onSubmit.emit({ email, password });
  }

  ngOnDestroy(): void {}
}
