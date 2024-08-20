import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.css']
})
export class TariffComponent implements OnInit {

  tarrifs: any[] =[];

  ngOnInit(): void {
    this.tarrifs = [
      {
        class: 'Economy Hatchback',
        baseCost: 1500,
        maxCost: 1800,
        hours: 24,
        kms: 300,
        fuel: 'Base level',
        extraCharge: '₹5/km',
        cars: []
      },
      {
        class: 'Hatchback',
        baseCost: 2000,
        maxCost: 2500,
        hours: 24,
        kms: 300,
        fuel: 'Base level',
        extraCharge: '₹5/km',
        cars: []
      },
      {
        class: 'Mini SUV',
        baseCost: 1500,
        maxCost: 1800,
        hours: 24,
        kms: 300,
        fuel: 'Base level',
        extraCharge: '₹5/km',
        cars: []
      },
      {
        class: 'Sedan',
        baseCost: 2200,
        maxCost: 4000,
        hours: 24,
        kms: 300,
        fuel: 'Base level',
        extraCharge: '₹5/km',
        cars: []
      },
      {
        class: 'MUV & SUV',
        baseCost: 3000,
        maxCost: 4000,
        hours: 24,
        kms: 300,
        fuel: 'Base level',
        extraCharge: '₹5/km',
        cars: []
      },
      {
        class: 'Luxury MUV & SUV',
        baseCost: 4500,
        maxCost: 7000,
        hours: 24,
        kms: 300,
        fuel: 'Base level',
        extraCharge: '₹5/km',
        cars: []
      }
    ];
  }

}
