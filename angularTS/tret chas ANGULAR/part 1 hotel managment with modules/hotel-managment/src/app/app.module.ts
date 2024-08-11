import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { GuestsModule } from './guests/guests.module';

@NgModule({
  declarations: [AppComponent, RoomComponent],
  imports: [BrowserModule, AppRoutingModule, GuestsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
