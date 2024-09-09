import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DialogModule,
    ButtonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DialogComponent
  ]
})
export class SharedModule { }
