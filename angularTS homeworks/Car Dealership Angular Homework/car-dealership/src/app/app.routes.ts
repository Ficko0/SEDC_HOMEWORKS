import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SingleCarDisplayPageComponent } from './single-car-display-page/single-car-display-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'car/:id', component: SingleCarDisplayPageComponent },
];
