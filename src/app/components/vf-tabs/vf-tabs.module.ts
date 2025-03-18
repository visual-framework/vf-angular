import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VfTabsAngularModule } from '@visual-framework/vf-tabs/vf-tabs.angular';

@NgModule({
  imports: [
    CommonModule,
    VfTabsAngularModule
  ],
  exports: [
    VfTabsAngularModule
  ]
})
export class VfTabsModule { }