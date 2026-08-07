import { Component, ElementRef, EventEmitter, Input, Output, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FeedbackOption {
  id: string;
  label: string;
}

@Component({
  selector: 'vf-chatbot-feedback',
  template: `
    <div
      class="vf-chatbot-feedback__form vf-u-margin__top--400" style="display:block"
    >
      <div class="vf-chatbot-feedback__form-content vf-u-padding--400">
        <!-- Header -->
        <div class="vf-chatbot-feedback__form-content-header">
          <div class="vf-chatbot-feedback__title">
            Tell us more (optional)
          </div>
          <button
            role="button"
            class="vf-chatbot-feedback__form-close vf-button vf-button--icon vf-button--dismiss | vf-banner__button"
            type="button"
            aria-label="Close feedback form"
            data-vf-js-feedback-form-close
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>dismiss banner</title>
              <path
                d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z"
              />
            </svg>
          </button>
        </div>

        <!-- Feedback Options -->
        <div class="vf-chatbot-feedback__options">
          <button
            *ngFor="let option of feedback_options"
            class="vf-chatbot-feedback__option"
            [attr.data-feedback-option]="option.id"
            (click)="onFeedbackClick(option.id)"
          >
            {{ option.label }}
          </button>
        </div>

        <!-- Comment Field -->
        <label
          id="vf-chatbot-feedback-comment-title"
          for="vf-chatbot-feedback-comment"
          class="vf-chatbot-feedback__comment-title"
        >
          Comments
        </label>
        <textarea
          id="vf-chatbot-feedback-comment"
          aria-labelledby="vf-chatbot-feedback-comment-title"
          class="vf-chatbot-feedback__comment"
          rows="4"
          [(ngModel)]="comment"
        ></textarea>

        <!-- Submit Button -->
        <button
          type="button"
          class="vf-chatbot-feedback__submit vf-u-padding--200" data-vf-js-feedback-submit
          (click)="onSubmitClick()"
        >
          Submit
        </button>
      </div>
    </div>
  `,
})
export class VfChatbotFeedbackAngularComponent implements AfterViewInit {
  @Input() feedback_options: FeedbackOption[] = [];
  @Input() type: string = '';
  @Input() comment: string = '';

  @Output() feedback = new EventEmitter<{ type: string; id: string }>();
  @Output() commentChange = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
  }

  onFeedbackClick(optionId: string) {
    this.feedback.emit({ type: this.type, id: optionId });
  }

  onCloseClick() {
    this.close.emit();
  }

  onSubmitClick() {
    this.submit.emit();
  }
}
