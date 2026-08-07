import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VfChatbotAngularComponent } from './vf-chatbot.angular.component';
import { VfChatbotFabAngularModule } from '../vf-chatbot-fab/vf-chatbot-fab.angular.module';
import { VfChatbotStandaloneAngularModule } from '../vf-chatbot-standalone/vf-chatbot-standalone.angular.module';
import { VfChatbotSelectorAngularModule } from '../vf-chatbot-selector/vf-chatbot-selector.angular.module';
import { VfChatbotWelcomeAngularModule } from '../vf-chatbot-welcome.angular/vf-chatbot-welcome.angular.module';
import { VfChatbotPromptAngularModule } from '../vf-chatbot-prompt/vf-chatbot-prompt.angular.module';
import { VfChatbotDialogAngularModule } from '../vf-chatbot-dialog/vf-chatbot-dialog.angular.module';

@NgModule({
  declarations: [
    VfChatbotAngularComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    VfChatbotFabAngularModule,
    VfChatbotSelectorAngularModule,
    VfChatbotWelcomeAngularModule,
    VfChatbotPromptAngularModule,
    VfChatbotDialogAngularModule,
    VfChatbotStandaloneAngularModule
  ],
  exports: [
    VfChatbotAngularComponent
  ]
})
export class VfChatbotAngularModule { }
