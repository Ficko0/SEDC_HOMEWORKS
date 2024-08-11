import { Car } from './../types/car.interface';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import carJson from '../data/cars.json';
import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, AboutUsComponent, FooterComponent, ContactPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // Smart Component. Everything gets pulled from here.
  cars = signal<Car[]>([...(carJson as Car[])]);
  selectedPage = signal<'home' | 'about us' | 'contact'>('home');

  handlePageSelect(value: 'home' | 'about us' | 'contact') {
    this.selectedPage.update(() => value);
  }
}
