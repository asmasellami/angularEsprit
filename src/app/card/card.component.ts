import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Event } from '../models/event';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() event!: Event;

  increment_likes() {
    this.event.nbLikes++;
  }

  isPast() {
    return this.event.date < new Date();
  }
}
