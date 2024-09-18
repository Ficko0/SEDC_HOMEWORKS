import { CarBrand } from './carBrand.enum';
import { CarModels } from './carModels.enum';
import { CarType } from './carType.enum';
import { Color } from './colors.enum';
import { FuelType } from './fuelType.enum';
import { TransimissionType } from './transmission.enum';

export interface SearchCarQuery {
  priceFrom?: number;
  priceTo?: number;
  carType?: CarType;
  carColor?: Color;
  isNew?: boolean;
  carBrand?: CarBrand;
  carModel?: CarModels;
  carFuelType?: FuelType;
  carTransmission?: TransimissionType;
}
