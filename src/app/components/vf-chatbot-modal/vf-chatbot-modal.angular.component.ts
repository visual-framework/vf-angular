import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VfChatbotDialogAngularModule } from '../vf-chatbot-dialog/vf-chatbot-dialog.angular.module';
import { VfChatbotPromptAngularModule } from '../vf-chatbot-prompt/vf-chatbot-prompt.angular.module';
import { VfChatbotSelectorAngularModule } from '../vf-chatbot-selector/vf-chatbot-selector.angular.module';
import { VfChatbotWelcomeAngularModule } from '../vf-chatbot-welcome.angular/vf-chatbot-welcome.angular.module';

export interface VfChatbotModalConfig {
  type?: 'modal' | 'standalone';
  title?: string;
  welcome_logo?: boolean;
  welcome_message?: string;
  welcome_logo_alt?: string;
  welcome_suggestions_title?: string;
  input_placeholder?: string;
  welcome_max_suggestions?: number;
  disclaimer?: string;
  footnote?: string;
  icons?: {
    assistant_avatar?: string;
    user_avatar?: string;
    send_button?: string;
    minimize?: string;
    close?: string;
    main_logo_url?: string;
  };
  selectorContext?: unknown;
  features?: {
    enable_welcome?: boolean;
    enable_welcome_suggestions?: boolean;
    enable_qa_data_loading?: boolean;
    enable_predefined_qa?: boolean;
    enable_fallback_responses?: boolean;
    enable_feedback?: boolean;
    enable_disclaimer?: boolean;
    enable_typing_indicator?: boolean;
  };
  behavior?: {
    show_scrollbar?: boolean;
    auto_scroll?: boolean;
  };
  api?: {
    qa_data_url?: string;
  };
  onDismissDisclaimer?: () => void;
}

@Component({
  selector: 'vf-chatbot-modal',
  standalone: true,
  imports: [
    CommonModule,
    VfChatbotDialogAngularModule,
    VfChatbotPromptAngularModule,
    VfChatbotSelectorAngularModule,
    VfChatbotWelcomeAngularModule
  ],
  templateUrl: './vf-chatbot-modal.angular.component.html'
})
export class VfChatbotModalAngularComponent {
  @Input() config: VfChatbotModalConfig = { type: 'modal' };
  @Input() messages: unknown[] = [];
  @Input() sources: unknown[] = [];
  @Input() prompts: unknown[] = [];
  @Input() qaData: unknown[] = [];
  @Input() isOpen = false;

  dialogTitle = 'Close chat and delete conversation?';
  dialogMessage = 'Are you sure you want to close the chat? <br>Your current conversation history will be permanently deleted.';
  dialogCancelLabel = 'Keep chat open';
  dialogConfirmLabel = 'Close and delete';

  @Output() close = new EventEmitter<void>();
  @Output() minimize = new EventEmitter<void>();

  get configJson(): string {
    return JSON.stringify(this.config || {});
  }
}
