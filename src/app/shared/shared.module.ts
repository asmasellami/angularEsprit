import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainsPipe } from './pipes/contains.pipe';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    ContainsPipe,
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    HighlightDirective,
    ContainsPipe
  ]
})
export class SharedModule { }
