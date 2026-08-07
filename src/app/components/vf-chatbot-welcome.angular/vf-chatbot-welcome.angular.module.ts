import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { VfChatbotWelcomeAngularComponent } from './vf-chatbot-welcome.angular.component';
import { VfChatbotActionPromptAngularModule } from '../vf-chatbot-action-prompt/vf-chatbot-action-prompt.angular.module';

@NgModule({
  declarations: [
    VfChatbotWelcomeAngularComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    VfChatbotActionPromptAngularModule
  ],
  exports: [
    VfChatbotWelcomeAngularComponent
  ]
})
export class VfChatbotWelcomeAngularModule { }
