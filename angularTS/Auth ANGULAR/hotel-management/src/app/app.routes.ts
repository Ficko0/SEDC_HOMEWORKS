import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomsPageComponent } from './rooms-page/rooms-page.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { GuestsComponent } from './guests/guests.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { authGuard } from '../guards/auth.guard';
import { UserRole } from '../types/user-role.enum';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  {
    path: 'rooms',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: RoomsPageComponent,
        canActivate: [authGuard],
        data: { roles: [UserRole.Employee, UserRole.Admin] },
      },
      {
        path: ':id',
        component: RoomDetailsComponent,
        canActivate: [authGuard],
        data: { roles: [UserRole.Employee, UserRole.Admin] },
      },
      {
        path: ':id/add-guest',
        component: BookRoomComponent,
        canActivate: [authGuard],
        data: { roles: [UserRole.Admin, UserRole.Employee] },
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'guests',
    component: GuestsComponent,
    canActivate: [authGuard],
    data: { roles: [UserRole.Admin] },
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'not-allowed', component: NotAllowedComponent },
  { path: '**', redirectTo: 'not-found' },
];