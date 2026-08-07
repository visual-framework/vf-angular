import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { VfChatbotSelectorAngularComponent } from './vf-chatbot-selector.angular.component';

@NgModule({
  declarations: [
    VfChatbotSelectorAngularComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    VfChatbotSelectorAngularComponent
  ]
})
export class VfChatbotSelectorAngularModule { }
