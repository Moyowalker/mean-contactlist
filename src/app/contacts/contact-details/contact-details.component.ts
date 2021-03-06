import { ContactService } from './../contact.service';
import { Contact } from './../contact';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  @Input()
  contact: Contact

  @Input()
  createHandler: Function
  @Input()
  updateHandler: Function
  @Input()
  deleteHandler: Function

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

    createContact(contact: Contact) {
      this.contactService.createContact(contact).then((newContact: Contact) => {
        this.createHandler(newContact)
      })
    }

    updateContact(contact: Contact): void {
      this.contactService.updateContact(contact).then((updatedContact: Contact) => {
        this.updateHandler(updatedContact)
      })
    }

    deleteContact(contactId: String) {
      this.contactService.deleteContact(contactId).then((deletedContactId: String) => {
        this.deleteHandler(deletedContactId)
      })
    }
}
