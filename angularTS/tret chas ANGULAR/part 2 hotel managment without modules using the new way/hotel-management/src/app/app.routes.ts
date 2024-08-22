import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomsPageComponent } from './rooms-page/rooms-page.component';

// With empty brackets we show the home component
// This is the way we handle routing in Angular
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rooms', component: RoomsPageComponent },
  // TODO:
  // Replace with guests component
  { path: 'guests', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];
