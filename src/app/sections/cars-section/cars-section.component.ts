import { Component, Input } from '@angular/core';
import { AppConstants } from 'src/app/shared/common/app.constants';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { CarView } from './cars.interface';

@Component({
  selector: 'app-cars-section',
  templateUrl: './cars-section.component.html',
  styleUrls: ['./cars-section.component.css']
})
export class CarsSectionComponent {

  @Input() viewProperties: CarView = {
    limitedView: false,
    defaultCarsCount: 100,
    sorted: true,
    shuffle: false
  };

  carsForRent = [
    {
      image: 'assets/img/car-rent-1.png',
      name: 'Jeep Compass',
      specs: {
        price: 5000,
        type: 'Manual'
      }
    },
    {
      image: 'assets/img/car-rent-2.png',
      name: 'Volkswagen Vento',
      specs: {
        price: 3000,
        type: 'Manual'
      }
    },
    {
      image: 'assets/img/car-rent-3.png',
      name: 'Ford Ecosport',
      specs: {
        price: 2500,
        type: 'Manual'
      }
    },
    {
      image: 'assets/img/car-rent-4.png',
      name: 'Suzuki Baleno',
      specs: {
        price: 2200,
        type: 'Manual'
      }
    },
    {
      image: 'assets/img/car-rent-5.png',
      name: 'Tata Altroz',
      specs: {
        price: 2200,
        type: 'Manual'
      }
    },
    {
      image: 'assets/img/car-rent-6.png',
      name: 'Kia Seltos',
      specs: {
        price: 3000,
        type: 'Manual'
      }
    },
    {
      image: 'assets/img/car-rent-7.png',
      name: 'Suzuki Ertiga',
      specs: {
        price: 3000,
        type: 'Manual'
      }
    },
    {
      image: 'assets/img/car-rent-8.png',
      name: 'Mahindra Scorpio',
      specs: {
        price: 3000,
        type: 'Manual'
      }
    },
    {
      image: 'assets/img/car-rent-9.png',
      name: 'Mahindra 3XO',
      specs: {
        price: 3000,
        type: 'Manual'
      }
    },
    {
      image: 'assets/img/car-rent-10.png',
      name: 'Renault Triber',
      specs: {
        price: 2500,
        type: 'Manual'
      }
    },
    {
      image: 'assets/img/car-rent-11.png',
      name: 'Hyundai i10',
      specs: {
        price: 1800,
        type: 'Manual'
      }
    },
    {
      image: 'assets/img/car-rent-12.png',
      name: 'Suzuki Swift',
      specs: {
        price: 2100,
        type: 'Manual'
      }
    },
    {
      image: 'assets/img/car-rent-13.png',
      name: 'Suzuki Swift',
      specs: {
        price: 1600,
        type: 'Manual'
      }
    }
  ];

  constructor(private dialogService: DialogService) {

  }

  getWhatsappContact() {
    return `https://wa.me/${AppConstants.CONTACT_NUMBER}?text=${AppConstants.BOOKING_MESSAGE}`;
  }

  getCars(sort: boolean, shuffle?: boolean) {
    if(sort) {
      this.carsForRent.sort((a, b) => {
        return a.specs.price - b.specs.price;
      });
    }
    if(shuffle) {
      this.carsForRent.sort(() => Math.random() - 0.5);
    }
    return this.carsForRent;
  }

  OpenBooking() {
    const dialogContent = {
      status: true,
      content: {}
    }
    this.dialogService.dialogChanges(dialogContent);
  }

}
