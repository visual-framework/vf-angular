import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'vf-chatbot-prompt',
  template: `
    <div [ngClass]="messageClasses()">
      
      <!-- Avatar Section -->
      <div class="vf-chatbot-message__avatar vf-u-margin__bottom--200">

        <!-- User Avatar Name -->
        <span 
          class="vf-chatbot-message__avatar-name" 
          *ngIf="shouldShowAvatarName('user')">
          {{ avatar?.name }}
        </span>

        <!-- Avatar Image -->
        <img 
          *ngIf="hasAvatarImage()" 
          [src]="avatar?.src" 
          [alt]="avatar?.alt" />

        <!-- Assistant Avatar Name -->
        <span 
          class="vf-chatbot-message__avatar-name" 
          *ngIf="shouldShowAvatarName('assistant')">
          {{ avatar?.name }}
        </span>
      </div>

      <!-- Message Content -->
      <div class="vf-chatbot-message__content vf-u-padding--200">

        <!-- Loading Dots (keep in DOM so external JS can toggle visibility) -->
        <div class="vf-chatbot-message__content-loading-dots" aria-label="Loading" role="status" *ngIf="isLoading">
        <span class="vf-chatbot-message__dot"></span>
        <span class="vf-chatbot-message__dot"></span>
        <span class="vf-chatbot-message__dot"></span>
      </div>

        <!-- HTML Content -->
        <div 
          class="vf-chatbot-message__content-prompt vf-u-padding__left--200 vf-u-padding__right--200"
          [innerHTML]="content">
        </div>
      </div>
      
    </div>
    
  `
})
export class VfChatbotPromptAngularComponent {
  
  @Input() type: string = '';
  @Input() isLoading: boolean = false;
  @Input() avatar: any = {};
  @Input() content: string = '';
  @Input() sources: any = '';
  @Input() prompts: any = '';
  @Input() allowFeedback: boolean = true;


  shouldShowAvatarName(position: string): boolean {
    return this.avatar?.name && this.type === position;
  }

  hasAvatarImage(): boolean {
    return !!this.avatar?.src;
  }

  messageClasses(): string {
    
    let classes = `vf-chatbot-message vf-chatbot-message--${this.type} vf-u-margin__top--400`;
    if (this.isLoading) {
      classes += ' vf-chatbot-message--loading';
    }
    return classes;
  }
}
