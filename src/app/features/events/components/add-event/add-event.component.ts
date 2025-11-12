import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../../../../data-access/events.service';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {


searchInput= new FormControl('');

constructor(private eventService: EventService){}

  newevent!: any;
  eventForm= new FormGroup({
    Titre: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z ]*$')]),
    Description: new FormControl('', [Validators.required, Validators.minLength(30)]),
    Place: new FormGroup({
      gov: new FormControl(''),
      prov: new FormControl(''),
      postal_code: new FormControl(''),
    }),
    Fields: new FormArray([
      new FormControl('')
    ]),
});



get Description(){
  return this.eventForm.get('Description');
}
get Fields(): FormArray {
  return this.eventForm.get('Fields') as FormArray;
}

addField() {
  this.Fields.push(new FormControl(''));
}

add(){
  console.log(this.eventForm);
  this.newevent= this.eventForm.getRawValue();
  console.log(this.newevent);
  //service event to add the newevent
  this.eventService.liste.push(this.newevent);


}
}
