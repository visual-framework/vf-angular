import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    {
      provide: 'API_URL',
      useValue: 'https://api.example.com' // replace with actual API URL or import environment
    }
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }