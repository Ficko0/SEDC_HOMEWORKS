import { Component, computed, input, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
})
export class AuthFormComponent {
  type = input<'Login' | 'Register'>('Login');

  typeSwitch = computed(() => {
    this.type() === 'Login' ? 'regiser' : 'login';
  });

  onSubmit = output<{ email: string; password: string }>();

  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  submit() {
    const { email, password } = this.authForm.value;

    if (this.authForm.invalid || !email || !password) {
      alert('Invalid Credentials');
      return;
    }

    this.onSubmit.emit({ email, password });
  }
}
