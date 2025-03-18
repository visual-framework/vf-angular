import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VfHeroAngularModule } from '@visual-framework/vf-hero/vf-hero.angular';

@NgModule({
  imports: [
    CommonModule,
    VfHeroAngularModule
  ],
  exports: [
    VfHeroAngularModule
  ]
})
export class VfHeroModule { }