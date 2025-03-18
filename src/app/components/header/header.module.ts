import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './header.component';
import { HyphenateLowercasePipe } from '../../pipes/hyphenate-lowercase.pipe';

@NgModule({
  declarations: [
    HyphenateLowercasePipe,
    AppHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AppHeaderComponent]
})
export class AppHeaderModule { }
