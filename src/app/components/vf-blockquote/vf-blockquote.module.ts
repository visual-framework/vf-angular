import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VfBlockquoteAngularModule } from '@visual-framework/vf-blockquote/vf-blockquote.angular';

@NgModule({
  imports: [
    CommonModule,
    VfBlockquoteAngularModule
  ],
  exports: [
    VfBlockquoteAngularModule
  ]
})
export class VfBlockquoteModule { }
