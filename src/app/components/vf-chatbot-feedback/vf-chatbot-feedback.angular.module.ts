import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { VfChatbotFeedbackAngularComponent } from './vf-chatbot-feedback.angular.component';

@NgModule({
  declarations: [
    VfChatbotFeedbackAngularComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    VfChatbotFeedbackAngularComponent
  ]
})
export class VfChatbotFeedbackAngularModule { }
