import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppHeaderModule } from './components/header/header.module';
import { AppFooterModule } from './components/footer/footer.module';
import { VfComponentsModule } from './components/vf-components.module';
import { HttpClientModule } from '@angular/common/http';
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
    AppFooterModule,
    VfComponentsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }