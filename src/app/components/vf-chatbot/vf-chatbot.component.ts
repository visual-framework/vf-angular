import { Component } from '@angular/core';
import { VfChatbotConfig } from './vf-chatbot.angular.component';

@Component({
  selector: 'app-vf-chatbot',
  templateUrl: './vf-chatbot.angular.component.html'
})
export class VfChatbotComponent {
  public chatbotConfig: VfChatbotConfig = {
    type: 'standalone',
    title: 'Visual Framework Assistant',
    welcome_logo: true,
    welcome_message: "Welcome! I'm here to help with Visual Framework components.",
    welcome_logo_alt: 'Visual Framework Assistant',
    welcome_suggestions_title: 'Try asking me:',
    input_placeholder: 'Ask a question...',
    welcome_max_suggestions: 4,
    disclaimer: 'This demo chatbot is for internal component testing and UI exploration.',
    footnote: 'Review generated responses before using them in production.',
    icons: {
      assistant_avatar: './assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg',
      user_avatar: './assets/vf-chatbot/assets/vf-chatbot--avatar-user.svg',
      send_button: './assets/vf-chatbot/assets/vf-chatbot--icon-send.svg',
      minimize: './assets/vf-chatbot/assets/vf-chatbot--icon-minimize.svg',
      close: './assets/vf-chatbot/assets/vf-chatbot--icon-close.svg',
      main_logo_url: './assets/vf-chatbot/assets/vf-chatbot--icon-32x32-dark-green.svg'
    },
    features: {
      enable_welcome: true,
      enable_welcome_suggestions: true,
      enable_qa_data_loading: true,
      enable_predefined_qa: true,
      enable_fallback_responses: true,
      enable_feedback: true,
      enable_disclaimer: true,
      enable_typing_indicator: true
    },
    behavior: {
      show_scrollbar: true,
      auto_scroll: true
    },
    api: {
      qa_data_url: './assets/vf-chatbot/assets/vf-chatbot-qa.json'
    }
  };
}
