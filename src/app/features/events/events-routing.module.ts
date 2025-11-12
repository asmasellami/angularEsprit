import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEventsComponent } from './pages/list-events/list-events.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { EventsComponent } from './events.component';
import { AddEventComponent } from './components/add-event/add-event.component';

const routes: Routes = [
 /*  { path: "", component: ListEventsComponent },
  { path: "details/:id", component: EventDetailsComponent } */
  /*  {path :'',component:EventsComponent,children:[
     {path:'',component:ListEventsComponent},
     {path:'details/:id',component:EventDetailsComponent}
   ]} */
    { path: "", component: ListEventsComponent },
  { path: "details/:param", component: EventDetailsComponent },
 { path: 'add', component: AddEventComponent }
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
