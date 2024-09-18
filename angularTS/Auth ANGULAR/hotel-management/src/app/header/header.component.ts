import { Component, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private readonly authService: AuthService) {}

  isLoggedIn = computed(() => {
    this.authService.isAuth();
  });

  currentUser = computed(() => {
    this.authService.currentUser();
  });

  logout() {
    return this.authService.logout();
  }
}
