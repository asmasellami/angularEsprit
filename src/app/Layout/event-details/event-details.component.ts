import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {
  constructor(private route: ActivatedRoute) {}
 id!:Number;

 ngOninit()
 {
      this.id = this.route.snapshot.params['param'];


 }
 /*getparam(){
    this.id = this.route.snapshot.params['param'];
 }
  */

}
