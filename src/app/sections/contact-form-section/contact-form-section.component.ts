import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/shared/services/email.service';

@Component({
  selector: 'app-contact-form-section',
  templateUrl: './contact-form-section.component.html',
  styleUrls: ['./contact-form-section.component.css']
})
export class ContactFormSectionComponent {
 contactForm: FormGroup = this.fb.group({
  name:  ['', Validators.required],
  reply_to:  ['', Validators.required],
  subject:  ['', Validators.required],
  message:  ['', Validators.required],
 });

 constructor(private fb: FormBuilder, private emailService: EmailService) {

 }

 sendEmail() {
  this.emailService.sendEmail(this.contactForm.value);
  this.contactForm.reset();
 }


}
