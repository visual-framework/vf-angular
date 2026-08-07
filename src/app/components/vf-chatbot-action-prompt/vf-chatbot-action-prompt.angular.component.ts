// vf-chatbot-action-prompt.angular

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'vf-chatbot-action-prompt',
  template: `
    <a
    *ngIf="actionUrl; else buttonTemplate"
    [href]="actionUrl"
    class="vf-chatbot-action-prompt__link"
    role="button"
    [attr.target]="actionTarget || null"
  >
    {{ actionText }}
  </a>

  <ng-template #buttonTemplate>
    <button
      class="vf-chatbot-action-prompt__link"
    >
      {{ actionText }}
    </button>
  </ng-template>
  `
})
export class VfChatbotActionPromptAngularComponent {
  /** Equivalent to action_url */
  @Input({ alias: 'action_url' }) actionUrl?: string;

  /** Equivalent to action_text */
  @Input({ alias: 'action_text' }) actionText!: string;

  /** Equivalent to action_target */
  @Input({ alias: 'action_target' }) actionTarget?: string;

  /** Emits when the link/button is clicked (maps to onClick) */
  @Output() actionClick = new EventEmitter<MouseEvent>();

  onClick(ev: MouseEvent) {
    this.actionClick.emit(ev);
  }

  get isExternal(): boolean {
    return this.actionTarget === '_blank';
  }
}
