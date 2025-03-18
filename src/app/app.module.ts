import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppHeaderModule } from './components/header/header.module';
// import { AppHeroModule } from './components/hero/hero.module';
// import { AppSearchBarModule } from './components/search-bar/search-bar.module';
// import { AppPopularSectionsModule } from './components/popular-sections/popular-sections.module';
// import { AppStarterPackagesModule } from './components/starter-packages/starter-packages.module';
// import { AppPrebuiltCdnModule } from './components/prebuilt-cdn/prebuilt-cdn.module';
import { AppFooterModule } from './components/footer/footer.module';
import { VfComponentsModule } from './components/vf-components.module';
// import { VfBackToTopModule } from './components/vf-back-to-top/vf-back-to-top.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    AppRoutingModule,
    AppHeaderModule,
    // AppHeroModule,
    // AppSearchBarModule,
    // AppPopularSectionsModule,
    // AppStarterPackagesModule,
    // AppPrebuiltCdnModule,
    AppFooterModule,
    VfComponentsModule,
    // VfBackToTopModule
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }