import { Component, computed, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isLoggedIn = computed(() => {
    this.authService.isAuth();
  });

  currentUser = computed(() => {
    this.authService.currentUser();
  });

  constructor(private readonly authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
