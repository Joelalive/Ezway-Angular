import { Component } from '@angular/core';
import { AppConstants } from 'src/app/shared/common/app.constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  getWhatsappContact() {
    return `https://wa.me/${AppConstants.CONTACT_NUMBER}?text=${AppConstants.BOOKING_MESSAGE}`;
  }
}
