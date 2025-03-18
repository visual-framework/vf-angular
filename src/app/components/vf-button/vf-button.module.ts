import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VfButtonAngularModule } from '@visual-framework/vf-button/vf-button.angular';

@NgModule({
  imports: [
    CommonModule,
    VfButtonAngularModule
  ],
  exports: [
    VfButtonAngularModule
  ]
})
export class VfButtonModule { }
