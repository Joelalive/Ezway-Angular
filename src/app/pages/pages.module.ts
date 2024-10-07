import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SectionsModule } from '../sections/sections.module';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { TariffComponent } from './tariff/tariff.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { CarsComponent } from './cars/cars.component';
import { FaqComponent } from './faq/faq.component';
import { BookingPolicyComponent } from './booking-policy/booking-policy.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    TariffComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    CarsComponent,
    FaqComponent,
    BookingPolicyComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SectionsModule
  ]
})
export class PagesModule { }
