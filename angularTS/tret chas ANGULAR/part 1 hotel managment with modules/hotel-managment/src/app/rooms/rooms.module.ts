import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from '../room/room.component';
import { RoomsService } from '../rooms.service';

@NgModule({
  declarations: [RoomComponent],
  imports: [CommonModule],
  providers: [RoomsService],
})
export class RoomsModule {}
