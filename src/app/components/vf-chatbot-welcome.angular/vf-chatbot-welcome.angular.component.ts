import { Component, ElementRef, Input, AfterViewInit, ViewChild } from '@angular/core';


@Component({
  selector: 'vf-chatbot-welcome',
  template: `
    <div
      #welcomeRef
      class="vf-chatbot-welcome"
      data-vf-js-chatbot-welcome
      [attr.data-max-questions]="welcome_max_suggestions"
      [attr.data-enable-qa-data-loading]="enable_qa_data_loading"
      [attr.data-enable-predefined-qa]="enable_predefined_qa"
      [attr.data-enable-fallback-responses]="enable_fallback_responses"
      [attr.data-qa-data-url]="qa_data_url"
    >
      <div *ngIf="welcome_title || welcome_logo || welcome_message" class="vf-chatbot-welcome__content">
        <div *ngIf="welcome_logo" class="vf-chatbot-welcome__logo">
          <img
            *ngIf="welcome_logo_url"
            class="vf-chatbot-welcome__logo-image"
            [src]="welcome_logo_url"
            [alt]="welcome_logo_alt || 'AI Assistant'"
          />
        </div>

        <h1 *ngIf="welcome_title" class="vf-chatbot-welcome__title">
          {{ welcome_title }}
        </h1>

        <div *ngIf="welcome_message" class="vf-chatbot-welcome__message">
          {{ welcome_message }}
        </div>
      </div>

      <div
        *ngIf="enable_welcome_suggestions"
        class="vf-chatbot-welcome__suggestions"
      >
        <h3
          *ngIf="welcome_suggestions_title"
          class="vf-chatbot-welcome__suggestions-title"
        >
          {{ welcome_suggestions_title }}
        </h3>

        <div
          class="vf-chatbot-welcome__suggestions-grid"
          data-vf-js-chatbot-welcome-suggestions-grid
        ></div>
      </div>

      <template #templateRef id="welcome-suggestion-template"></template>
    </div>
  `,
  styles: [`
    .vf-chatbot-welcome { display: block; }
    .vf-chatbot-welcome__logo { text-align: center; margin-bottom: 1rem; }
    .vf-chatbot-welcome__logo-image { max-width: 64px; height: auto; }
  `]
})
export class VfChatbotWelcomeAngularComponent implements AfterViewInit {
  @Input() qaData: any[] = [];
  @Input() welcome_logo = false;
  @Input() welcome_logo_url = '';
  @Input() welcome_logo_alt = 'AI Assistant';
  @Input() welcome_title = '';
  @Input() welcome_message = '';
  @Input() welcome_suggestions_title = '';
  @Input() enable_welcome_suggestions = false;
  @Input() welcome_max_suggestions = 4;
  @Input() enable_qa_data_loading = true;
  @Input() enable_predefined_qa = true;
  @Input() enable_fallback_responses = true;
  @Input() qa_data_url = '';

  @ViewChild('welcomeRef', { static: true }) welcomeRef!: ElementRef;
  @ViewChild('templateRef', { static: true }) templateRef!: ElementRef;

  ngAfterViewInit(): void {
    // Initialize chatbot welcome
    

    // Render the action prompt template
    if (this.templateRef?.nativeElement) {
      const el = this.templateRef.nativeElement as HTMLElement;
      el.innerHTML = `
        <div class="vf-chatbot-action-prompt">
          <a href="#" class="vf-chatbot-action-prompt__link"></a>
        </div>
      `;
    }
  }
}

export * from './vf-chatbot-welcome.angular.module';
