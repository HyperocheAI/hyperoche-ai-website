import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  form = { name: '', email: '', subject: '', message: '' };
  sent = false;

  onSubmit() {
    this.sent = true;
    setTimeout(() => { this.sent = false; this.form = { name: '', email: '', subject: '', message: '' }; }, 3000);
  }
}
