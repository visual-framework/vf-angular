import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { VfChatbotPromptAngularComponent } from './vf-chatbot-prompt.angular.component';

@NgModule({
  declarations: [
    VfChatbotPromptAngularComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    VfChatbotPromptAngularComponent
  ]
})
export class VfChatbotPromptAngularModule { }
