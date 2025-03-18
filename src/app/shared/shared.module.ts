import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HyphenateLowercasePipe } from '../pipes/hyphenate-lowercase.pipe';

@NgModule({
  declarations: [
    HyphenateLowercasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HyphenateLowercasePipe
  ]
})
export class SharedModule { }