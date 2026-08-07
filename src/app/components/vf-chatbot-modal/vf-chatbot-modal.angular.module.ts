import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { VfChatbotModalAngularComponent } from './vf-chatbot-modal.angular.component';
import { VfChatbotActionPromptAngularModule } from '../vf-chatbot-action-prompt/vf-chatbot-action-prompt.angular.module';
import { VfChatbotSelectorAngularModule } from '../vf-chatbot-selector/vf-chatbot-selector.angular.module';
import { VfChatbotWelcomeAngularModule } from '../vf-chatbot-welcome.angular/vf-chatbot-welcome.angular.module';
import { VfChatbotPromptAngularModule } from '../vf-chatbot-prompt/vf-chatbot-prompt.angular.module';
import { VfChatbotFeedbackAngularModule } from '../vf-chatbot-feedback/vf-chatbot-feedback.angular.module';
import { VfChatbotDialogAngularModule } from '../vf-chatbot-dialog/vf-chatbot-dialog.angular.module';

@NgModule({
  declarations: [
    VfChatbotModalAngularComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    VfChatbotActionPromptAngularModule,
    VfChatbotSelectorAngularModule,
    VfChatbotWelcomeAngularModule,
    VfChatbotPromptAngularModule,
    VfChatbotFeedbackAngularModule,
    VfChatbotDialogAngularModule
  ],
  exports: [
    VfChatbotModalAngularComponent
  ]
})
export class VfChatbotModalAngularModule { }
