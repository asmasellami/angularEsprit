import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEventsComponent } from './pages/list-events/list-events.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
   EventsComponent,
    ListEventsComponent,
    EventCardComponent,
    SearchBarComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    ReactiveFormsModule
    ,
    SharedModule
  ]
})
export class EventsModule { }
