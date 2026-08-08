import { AfterViewInit, Component, ElementRef, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type VfChatbotMode = 'modal' | 'standalone';

export interface VfChatbotConfig {
  type?: VfChatbotMode;
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
  selector: 'vf-chatbot',
  template: `
    <ng-container [ngSwitch]="config.type || 'modal'">
      <vf-chatbot-standalone
        *ngSwitchCase="'standalone'"
        [config]="config"
        [messages]="messages"
        [sources]="sources"
        [prompts]="prompts"
      ></vf-chatbot-standalone>

      <div *ngSwitchDefault class="vf-chatbot" data-vf-js-chatbot>
        <vf-chatbot-fab
          [isInactive]="isOpen"
          [notificationCount]="notificationCount"
          (click)="openChat()"
        ></vf-chatbot-fab>

        <section
          class="vf-content vf-chatbot-modal-container"
          data-vf-js-chatbot-modal-container
          [attr.data-vf-chatbot-config]="modalConfigJson"
          [class.vf-chatbot-modal-container--active]="isOpen"
          [class.vf-chatbot-modal-container--inactive]="!isOpen"
          [attr.aria-modal]="isOpen ? 'true' : 'false'"
          [attr.aria-label]="(config.title || 'AI Assistant') + ' chatbot'"
          role="dialog"
        >
          <div class="vf-chatbot-modal__header vf-u-margin__bottom--400">
            <div class="vf-chatbot-modal__header-left">
              <vf-chatbot-selector
                *ngIf="config.selectorContext"
                [context]="config.selectorContext"
              ></vf-chatbot-selector>

              <div *ngIf="!config.selectorContext" class="vf-chatbot-selector">
                <div class="vf-chatbot-selector__title">
                  <img
                    *ngIf="config.icons?.main_logo_url"
                    [src]="config.icons?.main_logo_url"
                    [alt]="config.title || 'AI Assistant'"
                  />
                  <div class="vf-chatbot-selector__title-content">
                    <span class="vf-chatbot-selector__main-text">
                      {{ config.title || 'AI Assistant' }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="vf-chatbot-modal__header-right">
              <button
                type="button"
                class="vf-chatbot-modal__minimize"
                aria-label="Minimize chatbot"
                data-vf-js-chatbot-modal-minimize
                (click)="closeChat()"
              >
                <img
                  *ngIf="config.icons?.minimize"
                  [src]="config.icons?.minimize"
                  alt=""
                />
              </button>

              <button
                type="button"
                class="vf-chatbot-modal__close"
                aria-label="Close chatbot"
                data-vf-js-chatbot-modal-close
                (click)="closeChat()"
              >
                <img
                  *ngIf="config.icons?.close"
                  [src]="config.icons?.close"
                  alt=""
                />
              </button>
            </div>
          </div>

          <div class="vf-chatbot-modal | vf-u-background-color-ui--grey--light" data-vf-js-chatbot-modal>
            <div class="vf-chatbot-modal__content" data-vf-js-chatbot-modal-content>
              <vf-chatbot-welcome
                *ngIf="config.features?.enable_welcome"
                [qaData]="qaData"
                [welcome_logo]="config.welcome_logo ?? false"
                [welcome_logo_url]="config.icons?.main_logo_url ?? ''"
                [welcome_logo_alt]="config.welcome_logo_alt ?? 'AI Assistant'"
                [welcome_title]="config.title ?? ''"
                [welcome_message]="config.welcome_message ?? ''"
                [welcome_suggestions_title]="config.welcome_suggestions_title ?? ''"
                [enable_welcome_suggestions]="config.features?.enable_welcome_suggestions ?? false"
                [welcome_max_suggestions]="config.welcome_max_suggestions ?? 4"
                [qa_data_url]="config.api?.qa_data_url ?? ''"
                [enable_qa_data_loading]="config.features?.enable_qa_data_loading ?? true"
                [enable_predefined_qa]="config.features?.enable_predefined_qa ?? true"
                [enable_fallback_responses]="config.features?.enable_fallback_responses ?? true"
              ></vf-chatbot-welcome>

              <div
                class="vf-chatbot-modal__messages vf-u-margin__bottom--400"
                [ngClass]="{
                  'vf-chatbot-modal__messages-no-scrollbar': config.behavior?.show_scrollbar === false
                }"
                data-vf-js-chatbot-modal-messages
                [attr.data-auto-scroll]="config.behavior?.auto_scroll"
                role="region"
                aria-label="Chat messages"
              >
                <vf-chatbot-prompt
                  *ngFor="let msg of messages"
                  [type]="msg.type ?? ''"
                  [avatar]="msg.avatar"
                  [content]="msg.content ?? ''"
                  [sources]="sources"
                  [prompts]="prompts"
                  [allowFeedback]="config.features?.enable_feedback ?? true"
                ></vf-chatbot-prompt>
              </div>

              <div
                *ngIf="config.disclaimer && config.features?.enable_disclaimer"
                class="vf-chatbot-modal__disclaimer"
                data-vf-js-chatbot-modal-disclaimer
              >
                <div class="vf-banner vf-banner--alert vf-banner--info">
                  <div class="vf-banner__content">
                    <p class="vf-banner__text" [innerHTML]="config.disclaimer"></p>
                    <button
                      role="button"
                      aria-label="close notification banner"
                      class="vf-button vf-button--icon vf-button--dismiss | vf-banner__button"
                      (click)="config.onDismissDisclaimer?.()"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>dismiss banner</title>
                        <path d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="vf-chatbot-modal__input-container" role="region" aria-label="Chat message input">
              <div class="vf-chatbot-modal__input-wrapper">
                <label class="vf-u-sr-only" id="vf-chatbot-modal-input-label" for="vf-chatbot-modal-input">
                  Ask me
                </label>
                <textarea
                  id="vf-chatbot-modal-input"
                  data-vf-js-chatbot-modal-input
                  aria-labelledby="vf-chatbot-modal-input-label"
                  class="vf-chatbot-modal__input vf-form__textarea vf-u-padding__left--400"
                  [placeholder]="config.input_placeholder"
                  rows="1"
                ></textarea>
                <button
                  class="vf-chatbot-modal__send-button"
                  aria-label="Send message"
                  data-vf-js-chatbot-modal-send
                  type="button"
                >
                  <img [src]="config.icons?.send_button" alt="Send" />
                </button>
              </div>

              <div
                *ngIf="config.footnote"
                class="vf-chatbot-modal__footnote vf-u-margin__top--200 vf-u-margin__bottom--200"
                data-vf-js-chatbot-modal-footnote
                [innerHTML]="config.footnote"
              ></div>
            </div>

            <vf-chatbot-dialog
              [title]="dialogTitle"
              [message]="dialogMessage"
              [cancelLabel]="dialogCancelLabel"
              [confirmLabel]="dialogConfirmLabel"
            ></vf-chatbot-dialog>

            <template id="user-message-template"></template>
            <template id="assistant-message-template"></template>
            <template id="single-action-prompt-template"></template>
            <template id="loading-indicator-template"></template>
            <template id="action-prompts-template"></template>
            <template id="feedback-positive-template"></template>
            <template id="feedback-negative-template"></template>
          </div>
        </section>
      </div>
    </ng-container>
  `,
})
export class VfChatbotAngularComponent implements AfterViewInit {
  @Input() config: any = { type: 'modal' };
  @Input() qaData: any[] = [];
  @Input() messages: any[] = [];
  @Input() sources: any[] = [];
  @Input() prompts: any[] = [];
  @Input() notificationCount = 0;

  isOpen = false;
  dialogTitle = 'Close chat and delete conversation?';
  dialogMessage = 'Are you sure you want to close the chat? <br>Your current conversation history will be permanently deleted.';
  dialogCancelLabel = 'Keep chat open';
  dialogConfirmLabel = 'Close and delete';

  private loadedScripts = new Set<string>();

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  async ngAfterViewInit(): Promise<void> {
    if (this.config?.type !== 'modal') {
      return;
    }

    await this.loadModalScripts();

    const initVFChatbot = (window as any).initVFChatbot;
    if (typeof initVFChatbot === 'function') {
      initVFChatbot(this.config);
    }
  }

  private async loadModalScripts(): Promise<void> {
    const moduleScripts = [
      '/assets/vf-chatbot-fab/vf-chatbot-fab.js',
      '/assets/vf-chatbot-dialog/vf-chatbot-dialog.js',
      '/assets/vf-chatbot-feedback/vf-chatbot-feedback.js',
      '/assets/vf-chatbot-selector/vf-chatbot-selector.js',
      '/assets/vf-chatbot-sources/vf-chatbot-sources.js',
      '/assets/vf-chatbot-welcome/vf-chatbot-welcome.js'
    ];

    const moduleScriptsWithDependencies = [
      '/assets/vf-chatbot-standalone/vf-chatbot-standalone.js',
      '/assets/vf-chatbot-modal/vf-chatbot-modal.js',
      '/assets/vf-chatbot/vf-chatbot.js'
    ];

    for (const scriptSrc of moduleScripts) {
      await this.loadSingleScript(scriptSrc);
    }

    for (const scriptSrc of moduleScriptsWithDependencies) {
      await this.loadSingleScript(scriptSrc);
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
      // Fall through to the script tag loader.
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

  openChat(): void {
    this.isOpen = true;
  }

  closeChat(): void {
    this.isOpen = false;
  }

  get modalConfigJson(): string {
    return JSON.stringify(this.config || {});
  }
}
