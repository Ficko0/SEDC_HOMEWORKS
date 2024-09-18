import { CarBrand } from './carBrand.enum';
import { CarModels } from './carModels.enum';
import { CarType } from './carType.enum';
import { Color } from './colors.enum';
import { FuelType } from './fuelType.enum';
import { TransimissionType } from './transmission.enum';

export interface Car {
  id: string;
  description?: string;
  price: number; // -
  images?: string[];
  type: CarType; //enum -
  year: number; // -
  color: Color; //enum
  fuelType: FuelType; //enum -
  distance: number;
  isNew?: boolean; // -
  location?: {
    city: string;
    country: string;
  };
  brand: CarBrand; //enum -
  model: CarModels; //enum
  enginePower: number;
  doors: number;
  seats: number;
  transmission: TransimissionType; //enum -
}
