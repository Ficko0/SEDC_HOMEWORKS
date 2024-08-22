import { Room } from './../../types/room.interface';
import {
  Component,
  computed,
  input,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { RoomsComponent } from '../rooms/rooms.component';
import { FiltersComponent } from '../filters/filters.component';
import { Board } from '../../types/board.enum';
import { RoomView } from '../../types/room-view.enum';
import { ParkingType } from '../../types/parking-type.enum';
import { RoomsService } from '../../services/rooms.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, RoomsComponent, FiltersComponent],
  providers: [RoomsService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  rooms = signal<Room[]>([]);

  // Used for creating a subscription.
  subscription: Subscription = new Subscription();

  // Modern way of setting a state for a search bar
  searchTerm = signal<string>('');

  // Filtering
  filteredRooms = computed<Room[]>(() => {
    let filteredRooms: Room[] = this.rooms();

    // Search filter
    if (this.searchTerm().length) {
      filteredRooms = filteredRooms.filter((room) =>
        room.name.toLowerCase().includes(this.searchTerm().toLowerCase())
      );
    }

    // Guest capacity filter
    if (this.guestCapacity() > 0) {
      filteredRooms = filteredRooms.filter(
        (room) => room.guestCapacity >= this.guestCapacity()
      );
    }

    // Beds filter
    if (this.beds() > 0) {
      filteredRooms = filteredRooms.filter(
        (room) => room.beds + room.extraBeds >= this.beds()
      );
    }

    // Board filter
    if (this.board() !== Board.None) {
      filteredRooms = filteredRooms.filter(
        (room) => room.board === this.board()
      );
    }

    // View filter
    if (this.view() !== RoomView.None) {
      filteredRooms = filteredRooms.filter((room) => room.view === this.view());
    }

    // Parking filter
    if (this.parking() !== ParkingType.None) {
      filteredRooms = filteredRooms.filter(
        (room) => room.parking === this.parking()
      );
    }

    // AC filter
    if (this.hasAc()) {
      filteredRooms = filteredRooms.filter((room) => room.hasAirConditioning);
    }

    // Pets filter
    if (this.isPetFriendly()) {
      filteredRooms = filteredRooms.filter((room) => room.isPetFriendly);
    }

    // Price per night FROM filter
    if (this.pricePerNight() > 0) {
      filteredRooms = filteredRooms.filter(
        (room) => room.pricePerNight >= this.pricePerNight()
      );
    }

    // Price per night TO filter
    if (this.pricePerNightTo() > 0) {
      filteredRooms = filteredRooms.filter(
        (room) => room.pricePerNight <= this.pricePerNightTo()
      );
    }

    return filteredRooms;
  });

  // Implementing the roomService from the service
  constructor(private roomService: RoomsService) {}

  //ngOnInit or useEffect
  ngOnInit() {
    this.subscription = this.roomService.rooms.subscribe((rooms: Room[]) => {
      this.rooms.set(rooms);
    });
  }

  // For the Filters
  guestCapacity = signal<number>(1);
  beds = signal<number>(1);
  board = signal<Board>(Board.None);
  view = signal<RoomView>(RoomView.None);
  parking = signal<ParkingType>(ParkingType.None);
  // For the slider
  pricePerNight = signal<number>(1);
  pricePerNightTo = signal<number>(10000);
  // For checkboxes
  hasAc = signal<boolean>(false);
  isPetFriendly = signal<boolean>(false);

  // Handling the search term
  handleSearchTerm(updatedSearchTerm: string): void {
    this.searchTerm.update((): string => updatedSearchTerm);
  }

  // Unsubscribing.
  // Used when destroying the component or changing to another component.
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
