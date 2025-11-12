import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../../data-access/events.service';
import { Event } from '../../../../models/event';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {

  constructor( private actR: ActivatedRoute, private eventS:EventService) { }
  event!:Event;
  id!:number;
 ngOnInit(): void {

  // this.id= Number( this.actR.snapshot.paramMap.get('param'));
   this.actR.paramMap.subscribe(
    params=>this.id= Number(params.get('param')));

this.event= this.eventS.liste.find(e=>e.id==this.id)!;
//console.log(this.event);


  }
}
