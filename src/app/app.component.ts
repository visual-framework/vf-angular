import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet  (activate)="changeOfRoutes()"></router-outlet> <!-- This will display routed components -->
    <vf-chatbot [config]="config"></vf-chatbot>
    <app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'visual-framework';
  config: any = {
      type: "modal",
      title: "AI Assistant",
      welcome_logo: true,
      welcome_message: "Welcome! I'm here to help",
      welcome_logo_alt: "AI Assistant",
      welcome_suggestions_title: "Try asking me:",
      input_placeholder: "Ask me ...",
      welcome_max_suggestions: 4,
      disclaimer:
        'Disclaimer: This chatbot is designed to assist you with general information and basic inquiries. See our <a class="vf-banner__link" target="_blank" rel="noopener noreferrer" aria-label="disclaimer notes (opens in new tab)" href="https://www.ebi.ac.uk/data-protection/privacy-notice/embl-ebi-public-website/">disclaimer notes</a>.',
      footnote:
        'Review AI generated content for accuracy. <a class="vf-link" target="_blank" rel="noopener noreferrer" aria-label="Leave feedback (opens in new tab)" href="https://embl.service-now.com/esc?id=sc_cat_item&sys_id=5eeb8eb91b92e650b376da88b04bcbc1">Leave feedback</a>.',
      icons: {
        assistant_avatar:
            "./assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg",
        user_avatar:
            "./assets/vf-chatbot/assets/vf-chatbot--avatar-user.svg",
          send_button: "./assets/vf-chatbot/assets/vf-chatbot--icon-send.svg",
        main_logo_url:
            "./assets/vf-chatbot/assets/vf-chatbot--icon-32x32-dark-green.svg",
        minimize:
            "./assets/vf-chatbot/assets/vf-chatbot--icon-minimize.svg",
          close: "./assets/vf-chatbot/assets/vf-chatbot--icon-close.svg"
      },

      api: {
        chat_endpoint: false, //"/api/chat", // Disabled to use fallback responses
        feedback_endpoint: false, //"/api/feedback",
        qa_data_url: "../../assets/vf-chatbot/assets/vf-chatbot-qa.json",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your-token"
        },
        timeout: 10000
      },

      features: {
        enable_welcome: true,
        enable_feedback: true,
        enable_sources: true,
        enable_sources_custom_format: false,
        enable_welcome_suggestions: true,
        enable_typing_indicator: true,
        enable_disclaimer: true,
        enable_predefined_qa: true,
        enable_fallback_responses: true,
        enable_qa_data_loading: true,
        enable_instant_feedback: false
      },

      behavior: {
        auto_scroll: true,
        typing_delay: 800,
        show_scrollbar: false
      },

      selectorContext: {
        chatbotRoutes: {
          multiSelect: true,
          maxMultiSelect: 3,
          showSearch: true,
          showSearchThreshold: 5,
          showAllServices: true,
          showAllServicesSelected: true,
          routes:
            "../../assets/vf-chatbot/assets/vf-chatbot-selector-services.json",
          placeholder: "Select services",
          title: "Services",
          selector_logo_url:
            "../../assets/vf-chatbot/assets/vf-chatbot--icon-24x24-dark-green.svg",
          selector_logo_title: "AI Assistant"
        }
      },

      handlers: {
        on_message_send: "handleMessageSend",
        on_response_receive: "handleResponseReceive",
        on_feedback_submit: "handleFeedbackSubmit",
        on_suggestion_click: "handleSuggestionClick",
        on_error: "handleError",
        on_conversation_start: "handleConversationStart",
        on_conversation_end: "handleConversationEnd",
        on_fab_click: "handleFabClick",
        on_dialog_confirm: "handleDialogConfirm",
        on_dialog_cancel: "handleDialogCancel",
        on_minimize: "handleMinimize"
      },

      feedback_options: {
        positive: [
          { id: "accurate", label: "Accurate" },
          { id: "easy", label: "Easy to understand" },
          { id: "formatted", label: "Well formatted" }
        ],
        negative: [
          { id: "inaccurate", label: "Inaccurate answer" },
          { id: "nocontext", label: "Did not use context" },
          { id: "poorformat", label: "Poorly formatted" }
        ]
      },
      enable_session_persistence: true,
      restore_minimized_state: true // If true, restore minimized state after navigation
    };
  changeOfRoutes() {
    // Remove vf-mega-menu element when route changes
    const vfMegaMenuContent = document.querySelector('.vf-mega-menu__content');
    if (vfMegaMenuContent) {
      vfMegaMenuContent.setAttribute('aria-hidden', 'true');
      // Remove expanded state from any active menu items
      const expandedLinks = document.querySelectorAll('.vf-mega-menu__link.is-expanded');
      expandedLinks.forEach(link => (link as HTMLElement).click());
    }
  }
}
