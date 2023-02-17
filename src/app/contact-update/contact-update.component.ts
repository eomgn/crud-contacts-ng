import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit{

constructor(private contactsService:ContactsService, private route: ActivatedRoute){}

id?: any;

contactForm = new FormGroup({
  name: new FormControl<string|null>('', Validators.required),
  phone: new FormControl<string|null>('', Validators.required)
})

ngOnInit(): void {
 this.route.paramMap.subscribe(paramMap => {
  this.id = paramMap.get('id')
  this.contactsService.retrieveContato(this.id).subscribe(contact => {
    this.contactForm.reset(contact)
  })
 })
}

updateContact() {
  this.contactsService.updateContact({id: this.id,...this.contactForm.value}).subscribe(contact => this.contactForm.reset(contact))
}
}