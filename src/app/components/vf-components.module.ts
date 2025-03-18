// vf-components.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VfBackToTopAngularModule } from '@visual-framework/vf-back-to-top/vf-back-to-top.angular';
import { VfBackToTopComponent } from './vf-back-to-top/vf-back-to-top.component';

import { VfBadgeAngularModule } from '@visual-framework/vf-badge/vf-badge.angular';
import { VfBadgeComponent } from './vf-badge/vf-badge.component';

import { VfBannerAngularModule } from '@visual-framework/vf-banner/vf-banner.angular';
import { VfBannerComponent } from './vf-banner/vf-banner.component';

import { VfBlockquoteAngularModule } from '@visual-framework/vf-blockquote/vf-blockquote.angular';
import { VfBlockquoteComponent } from './vf-blockquote/vf-blockquote.component';

import { VfButtonAngularModule } from '@visual-framework/vf-button/vf-button.angular';
import { VfButtonComponent } from './vf-button/vf-button.component';

import { VfHeroAngularModule } from '@visual-framework/vf-hero/vf-hero.angular';
import { VfHeroComponent } from './vf-hero/vf-hero.component';

import { VfTabsAngularModule } from '@visual-framework/vf-tabs/vf-tabs.angular';
import { VfTabsComponent } from './vf-tabs/vf-tabs.component';
// import other components here

@NgModule({
  declarations: [
    VfBackToTopComponent,
    VfBannerComponent,
    VfBadgeComponent,
    VfBlockquoteComponent,
    VfButtonComponent,
    VfHeroComponent,
    VfTabsComponent,
    // declare other components here,
  ],
  imports: [
    CommonModule,
    VfBackToTopAngularModule,
    VfBannerAngularModule,
    VfBadgeAngularModule,
    VfBlockquoteAngularModule,
    VfButtonAngularModule,
    VfHeroAngularModule,
    VfTabsAngularModule,
  ],
  exports: [
    VfBackToTopComponent,
    VfBannerComponent,
    VfBadgeComponent,
    VfBlockquoteComponent,
    VfButtonComponent,
    VfHeroComponent,
    VfTabsComponent,
    VfBackToTopAngularModule,
    VfBannerAngularModule,
    VfBadgeAngularModule,
    VfBlockquoteAngularModule,
    VfButtonAngularModule,
    VfHeroAngularModule,
    VfTabsAngularModule,
  ]
})
export class VfComponentsModule { }