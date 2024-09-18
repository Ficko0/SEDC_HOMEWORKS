import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../types/auth.interface';
import { AuthService } from '../../services/auth.service';
import { AuthFormComponent } from "../auth-form/auth-form.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  login({ email, password }: Auth) {
    return this.authService.login(email, password).subscribe((response) => {
      if (!response) {
        alert('Invalid Credentials');
        return;
      }
      alert('Succesfully Logged In!');
      this.router.navigate(['/']);
    });
  }
}
