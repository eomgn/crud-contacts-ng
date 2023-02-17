import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent {

constructor(private contactsService:ContactsService, private router: Router){}

contactForm = new FormGroup({
  name: new FormControl<string|null>('', Validators.required),
  phone: new FormControl<string|null>('', Validators.required)
})

  createContact(): void {
    this.contactsService.createContact(this.contactForm.value ).subscribe(contact => {
      this.router.navigate(['/contacts']);
    });
  }
}