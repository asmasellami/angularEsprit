import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {

  constructor( private actR: ActivatedRoute) { }

  id!:number;
 ngOnInit(): void {

  // this.id = Number(this.actR.snapshot.paramMap.get('id'));
  this.actR.paramMap.subscribe(
    params => this.id = Number(params.get('id')));

  }

}
