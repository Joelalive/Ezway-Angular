import { Component } from '@angular/core';
import { AppConstants } from '../common/app.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  appconstants = AppConstants;
}
