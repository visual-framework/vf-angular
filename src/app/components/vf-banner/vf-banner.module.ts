import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VfBannerAngularModule } from '@visual-framework/vf-banner/vf-banner.angular';

@NgModule({
  imports: [
    CommonModule,
    VfBannerAngularModule
  ],
  exports: [
    VfBannerAngularModule
  ]
})
export class VfBannerModule { }