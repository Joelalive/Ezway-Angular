import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceSectionComponent } from './service-section/service-section.component';
import { CarsSectionComponent } from './cars-section/cars-section.component';
import { ContactFormSectionComponent } from './contact-form-section/contact-form-section.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ServiceSectionComponent,
    CarsSectionComponent,
    ContactFormSectionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ServiceSectionComponent,
    CarsSectionComponent,
    ContactFormSectionComponent
  ]
})
export class SectionsModule { }
