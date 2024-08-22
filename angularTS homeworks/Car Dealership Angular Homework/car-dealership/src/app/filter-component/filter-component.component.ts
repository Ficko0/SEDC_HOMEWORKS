import { Component, input, output, signal } from '@angular/core';
import { CarType } from '../../types/carType.enum';
import { CarBrand } from '../../types/carBrand.enum';
import { CarModels } from '../../types/carModels.enum';
import { TransimissionType } from '../../types/transmission.enum';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { Color } from '../../types/colors.enum';
import { FuelType } from '../../types/fuelType.enum';

@Component({
  selector: 'app-filter-component',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
  templateUrl: './filter-component.component.html',
  styleUrl: './filter-component.component.css',
})
export class FilterComponentComponent {
  // Setting the state of the panel
  readonly panelOpenState = signal(false);

  carTypeOptions = Object.values(CarType);
  carBrandOptions = Object.values(CarBrand);
  carModelOptions = Object.values(CarModels);
  carTransmissionOptions = Object.values(TransimissionType);
  carColorOptions = Object.values(Color);
  carFuelTypeOptions = Object.values(FuelType);

  // Getting the signal values from the home component
  priceFrom = input<number>(0);
  onPriceFromChange = output<number>();

  priceTo = input<number>(250000);
  onPriceToChange = output<number>();

  carType = input<CarType>(CarType.None);
  onCarTypeChange = output<CarType>();

  carColor = input<Color>(Color.None);
  onCarColorChange = output<Color>();

  isNew = input<boolean>(false);
  onIsNewChange = output<boolean>();

  carBrand = input<CarBrand>(CarBrand.None);
  onCarBrandChange = output<CarBrand>();

  carModel = input<CarModels>(CarModels.None);
  onCarModelChange = output<CarModels>();

  carTransmission = input<TransimissionType>(TransimissionType.None);
  onCarTransmissionChange = output<TransimissionType>();

  carFuelType = input<FuelType>(FuelType.None);
  onCarFuelTypeChange = output<FuelType>();
}
