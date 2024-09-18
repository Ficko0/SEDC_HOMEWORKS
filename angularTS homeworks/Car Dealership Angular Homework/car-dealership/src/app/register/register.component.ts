import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Auth } from '../../types/auth.interface';
import { AuthFormComponent } from "../auth-form/auth-form.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AuthFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  register({ email, password }: Auth) {
    return this.authService.register(email, password).subscribe((response) => {
      if (!response) {
        alert('Invalid Credentials');
        return;
      }
      alert('Succesfully Registered!');
      this.router.navigate(['/login']);
    });
  }
}
