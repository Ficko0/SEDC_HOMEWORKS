import { Component, OnInit, signal } from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component';
import { Room } from '../../types/room.interface';
import { RoomsService } from '../../services/rooms.service';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-rooms-page',
  standalone: true,
  imports: [RoomsComponent, AsyncPipe, JsonPipe],
  providers: [RoomsService],
  templateUrl: './rooms-page.component.html',
  styleUrl: './rooms-page.component.css',
})
export class RoomsPageComponent implements OnInit {
  rooms: Observable<Room[]> = new Observable<Room[]>();

  constructor(private roomService: RoomsService) {}

  // We are saying that we will use these rooms.
  ngOnInit(): void {
    this.rooms = this.roomService.rooms;
  }
}
