import {
  Component,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnInit,
  AfterViewInit,
  ViewChild,
  ViewEncapsulation,
  Renderer2,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'vf-chatbot-standalone',
  templateUrl: './vf-chatbot-standalone.angular.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class VfChatbotStandaloneAngularComponent implements OnInit, AfterViewInit {
  @Input() config: any = {};
  @Input() messages: any[] = [];
  @Input() sources: any[] = [];
  @Input() prompts: any[] = [];
  @Input() inputValue = '';

  @Output() onSendMessage = new EventEmitter<void>();
  @Output() onInputChange = new EventEmitter<Event>();
  @Output() onFeedback = new EventEmitter<any>();
  @Output() onDialogConfirm = new EventEmitter<void>();
  @Output() onDialogCancel = new EventEmitter<void>();

  @ViewChild('standaloneRef') standaloneRef!: ElementRef;

  qaData: any[] = [];
  private loadedScripts = new Set<string>();

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {}

  async ngAfterViewInit() {
    try {
      await this.loadWorkingScripts();
      this.initializeChatbot();
    } catch {
      this.initializeChatbot();
    }
  }

  private async loadWorkingScripts(): Promise<void> {
    const moduleScripts = [
      '/assets/vf-chatbot-fab/vf-chatbot-fab.js',
      '/assets/vf-chatbot-dialog/vf-chatbot-dialog.js',
      '/assets/vf-chatbot-feedback/vf-chatbot-feedback.js',
      '/assets/vf-chatbot-selector/vf-chatbot-selector.js',
      '/assets/vf-chatbot-sources/vf-chatbot-sources.js',
      '/assets/vf-chatbot-welcome/vf-chatbot-welcome.js'
    ];

    const moduleScriptsWithDependencies = [
      '/assets/vf-chatbot/vf-chatbot.js',
      '/assets/vf-chatbot-modal/vf-chatbot-modal.js',
      '/assets/vf-chatbot-standalone/vf-chatbot-standalone.js'
    ];

    for (const scriptSrc of moduleScripts) {
      try {
        await this.loadSingleScript(scriptSrc);
      } catch {
        // Keep loading remaining scripts; standalone init tolerates missing optional modules.
      }
    }

    for (const scriptSrc of moduleScriptsWithDependencies) {
      try {
        await this.loadSingleScript(scriptSrc);
      } catch {
        // Keep loading remaining scripts; standalone init tolerates missing optional modules.
      }
    }
  }

  private async loadSingleScript(src: string): Promise<void> {
    if (this.loadedScripts.has(src)) {
      return;
    }

    try {
      await import(/* webpackIgnore: true */ src);
      this.loadedScripts.add(src);
      return;
    } catch {
      // Fall through to script tag loading if dynamic import fails.
    }

    await new Promise<void>((resolve) => {
      const existingScript = this.document.querySelector(`script[src="${src}"]`);
      if (existingScript) {
        this.loadedScripts.add(src);
        resolve();
        return;
      }

      const script = this.renderer.createElement('script');
      script.type = 'module';
      script.src = src;
      script.async = true;

      script.onload = () => {
        this.loadedScripts.add(src);
        resolve();
      };

      script.onerror = () => {
        this.loadedScripts.add(`${src}_failed`);
        resolve();
      };

      this.renderer.appendChild(this.document.head, script);
    });
  }

  private initializeChatbot(): void {
    const allInitFunctions = [
      'initVFChatbotFab',
      'initVFChatbotDialog',
      'initVFChatbotFeedback',
      'initVFChatbotSelector',
      'initVFChatbotSources',
      'initVFChatbotWelcome',
      'initVFChatbotStandalone',
      'initVFChatbotModal',
      'initVFChatbot'
    ];

    allInitFunctions.forEach(funcName => {
      if (typeof (window as any)[funcName] === 'function') {
        try {
          (window as any)[funcName]();
        } catch {
          // Continue initializing available modules.
        }
      }
    });
  }
}

@Component({
  selector: 'app-vf-chatbot-standalone-page',
  template: `
    <vf-chatbot
      [config]="chatbotConfig"
      [qaData]="[]"
      [messages]="[]"
      [sources]="[]"
      [prompts]="[]"
    ></vf-chatbot>
  `
})
export class VfChatbotStandalonePageComponent {
  public chatbotConfig = {
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
