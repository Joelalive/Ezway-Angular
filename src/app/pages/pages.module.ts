import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SectionsModule } from '../sections/sections.module';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { TariffComponent } from './tariff/tariff.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    TariffComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SectionsModule
  ]
})
export class PagesModule { }
