import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Layout/home/home.component';
import { NotFoundComponent } from './Layout/not-found/not-found.component';
import { ListEventsComponent } from './Layout/list-events/list-events.component';
import { EventDetailsComponent } from './Layout/event-details/event-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/Acc', pathMatch: 'full' },
  { path: 'Acc', component: HomeComponent },
  //{path: 'events', component:ListEventsComponent},
  //{path:'eventdetails/:param',component:EventDetailsComponent},//
   { path: "events", component: ListEventsComponent,
    children:[
      {path:'eventDetails/:param', component:EventDetailsComponent}
    ]
   },
  {path:"user", loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  { path: 'events', loadChildren: () => import('./features/events/events.module').then(m => m.EventsModule) },
  { path: 'tickets', loadChildren: () => import('./features/tickets/tickets.module').then(m => m.TicketsModule) },
  { path: 'feedback', loadChildren: () => import('./features/feedback/feedback.module').then(m => m.FeedbackModule) },
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
  {path:'**', component:NotFoundComponent}//toujours la derniere ligne
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
