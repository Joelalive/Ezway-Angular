import { CarView } from 'src/app/sections/cars-section/cars.interface';
import { AppConstants } from './../../shared/common/app.constants';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  appConstants = AppConstants;

  carProperties: CarView = {
    limitedView: true,
    defaultCarsCount: 6,
    sorted: true,
    shuffle: true
  }

  getWhatsappContact() {
    return `https://wa.me/${AppConstants.CONTACT_NUMBER}?text=${AppConstants.BOOKING_MESSAGE}`;
  }


}
