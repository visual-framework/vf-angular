import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppFooterComponent } from './footer.component';

@NgModule({
  declarations: [AppFooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AppFooterComponent]
})
export class AppFooterModule { }
