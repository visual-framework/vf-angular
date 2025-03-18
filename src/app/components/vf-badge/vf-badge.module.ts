import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VfBadgeAngularModule } from '@visual-framework/vf-badge/vf-badge.angular';

@NgModule({
  imports: [
    CommonModule,
    VfBadgeAngularModule
  ],
  exports: [
    VfBadgeAngularModule
  ]
})
export class VfBadgeModule { }
