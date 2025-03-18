import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppNavigationComponent } from './components/navigation/navigation.component'; // Import the NavigationComponent
// import { VfActivityGroupComponent } from './components/vf-activity-group/vf-activity-group.component';
import { VfBannerComponent } from './components/vf-banner/vf-banner.component';
import { VfBadgeComponent } from './components/vf-badge/vf-badge.component';
import { VfBlockquoteComponent } from './components/vf-blockquote/vf-blockquote.component';
import { VfButtonComponent } from './components/vf-button/vf-button.component';
import { VfHeroComponent } from './components/vf-hero/vf-hero.component';
import { VfTabsComponent } from './components/vf-tabs/vf-tabs.component';
import { VfBackToTopComponent } from './components/vf-back-to-top/vf-back-to-top.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'components/vf-back-to-top', component: VfBackToTopComponent },
  { path: 'components/vf-badge', component: VfBadgeComponent },
  { path: 'components/vf-banner', component: VfBannerComponent },
  { path: 'components/vf-blockquote', component: VfBlockquoteComponent },
  { path: 'components/vf-button', component: VfButtonComponent },
  { path: 'components/vf-hero', component: VfHeroComponent },
  { path: 'components/vf-tabs', component: VfTabsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
