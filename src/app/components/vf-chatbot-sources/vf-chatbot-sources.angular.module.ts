import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { VfChatbotSourcesAngularComponent } from './vf-chatbot-sources.angular.component';

@NgModule({
  declarations: [
    VfChatbotSourcesAngularComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    VfChatbotSourcesAngularComponent
  ]
})
export class VfChatbotSourcesAngularModule { }
