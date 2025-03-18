import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VfBackToTopAngularModule } from '@visual-framework/vf-back-to-top/vf-back-to-top.angular';

@NgModule({
  imports: [
    CommonModule,
    VfBackToTopAngularModule
  ],
  exports: [
    VfBackToTopAngularModule
  ]
})
export class VfBackToTopModule { }
