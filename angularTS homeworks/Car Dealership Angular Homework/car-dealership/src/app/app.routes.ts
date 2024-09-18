import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CarDisplayPageComponent } from './car-display-page/car-display-page.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { SellCarComponentComponent } from './sell-car-component/sell-car-component.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from '../guards/auth.guard';
import { UserRole } from '../types/user-role.enum';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutUsComponent, canActivate: [authGuard] },
  {
    path: 'contact',
    component: ContactPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'cars',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: CarDisplayPageComponent,
        canActivate: [authGuard],
      },
      {
        path: ':id',
        component: CarDetailsComponent,
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: 'sell-car',
    component: SellCarComponentComponent,
    canActivate: [authGuard],
    data: { roles: [UserRole.Admin, UserRole.User] },
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
