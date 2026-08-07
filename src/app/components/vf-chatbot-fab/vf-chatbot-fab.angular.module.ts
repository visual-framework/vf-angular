import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { VfChatbotFabAngularComponent } from './vf-chatbot-fab.angular.component';

@NgModule({
  declarations: [
    VfChatbotFabAngularComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    VfChatbotFabAngularComponent
  ]
})
export class VfChatbotFabAngularModule { }
