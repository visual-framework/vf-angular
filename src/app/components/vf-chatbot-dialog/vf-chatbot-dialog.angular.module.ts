import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { VfChatbotDialogAngularComponent } from './vf-chatbot-dialog.angular.component';

@NgModule({
  declarations: [
    VfChatbotDialogAngularComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    VfChatbotDialogAngularComponent
  ]
})
export class VfChatbotDialogAngularModule { }
