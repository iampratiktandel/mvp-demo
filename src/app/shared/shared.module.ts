import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { InitialsPipe } from './pipes/initials.pipe';



@NgModule({
  declarations: [HighlightDirective, InitialsPipe],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    InitialsPipe
  ]
})
export class SharedModule { }
