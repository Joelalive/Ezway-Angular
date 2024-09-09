import { Component } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private dialogService: DialogService) {

  }

  OpenBooking() {
    const dialogContent = {
      status: true,
      content: {}
    }
    this.dialogService.dialogChanges(dialogContent);
  }

  carsForRent = [
    {
      image: 'assets/img/car-rent-1.png',
      name: 'Jeep Compass',
      specs: {
        price: '2000',
        type: 'Manual'
      }
    },
    {
      image: 'assets/img/car-rent-2.png',
      name: 'Volkswagen Vento',
      specs: {
        price: '2000',
        type: 'Manual'
      }
    },
    {
      image: 'assets/img/car-rent-3.png',
      name: 'Ford Ecosport',
      specs: {
        price: '2000',
        type: 'Manual'
      }
    },
    {
      image: 'assets/img/car-rent-4.png',
      name: 'Suzuki Baleno',
      specs: {
        price: '2000',
        type: 'Manual'
      }
    },
    {
      image: 'assets/img/car-rent-5.png',
      name: 'Tata Altroz',
      specs: {
        price: '2000',
        type: 'Manual'
      }
    },
    {
      image: 'assets/img/car-rent-6.png',
      name: 'Kia Seltos',
      specs: {
        price: '2000',
        type: 'Manual'
      }
    }
  ];



}
