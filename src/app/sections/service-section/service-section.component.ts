import { Component, Input, OnInit } from '@angular/core';
import { ServiceSection } from '../service-section';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.css']
})
export class ServiceSectionComponent implements OnInit {

  @Input() showSectionNumber = true;

  services: ServiceSection[] = [];

  ngOnInit(): void {
    this.services = [
      {
        name: 'Car Rental',
        description: 'We have a huge variety of cars that you could choose from based on your need.',
        icon: 'fa-taxi'
      },
      {
        name: 'No Hidden Charges',
        description: '.',
        icon: 'fa-money-check-alt'
      },
      {
        name: 'Emergency Support',
        description: 'We have our support team available 24/7 to assist you in terms of emergency.',
        icon: 'fa-life-ring'
      }
    ];
  }
}
