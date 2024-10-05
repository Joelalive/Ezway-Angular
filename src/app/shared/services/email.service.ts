import { MessagesService } from './message.service';
import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { Email } from './email.interface';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private toastService: MessagesService) { }
  
  sendEmail(email: Email) { 
    const templateParams = {
      subject: email.subject,
      name: email.name,
      message: email.message,
      reply_to: email.reply_to,
    };
    
    emailjs
      .send('service_5fp58ri', 'template_1livfn5', templateParams, {
        publicKey: 'YN2UIHnauQvSnrneB',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.toastService.showSuccess('Your request has been sent successfully.');
        },
        (err) => {
          console.log('FAILED...', err);
          this.toastService.showError(err);
        },
      );
  }

}
