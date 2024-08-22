import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Room } from '../types/room.interface';
import roomsData from '../data/rooms.json';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor() {
    this.updateRooms(roomsData as Room[]);
  }

  // 1. BehaviorSubject
  // This keeps the last value that changed and it knows which change happenend in what time.
  private _rooms: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>([]);

  // 2. Updating the rooms
  updateRooms(rooms: Room[]) {
    this._rooms.next(rooms);
  }

  // 3. Observable. It creates a STRING.
  // The way it works is that it creates a source for flow that has no end and it doesn't end immidiatelly like the Promise.
  // It has so-called SUBSCRIBERS.
  // It tracks the changes in REAL-TIME.
  rooms: Observable<Room[]> = this._rooms.asObservable();
}
