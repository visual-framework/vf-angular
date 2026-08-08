import {
  Component,
  Input,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';


export interface VFChatbotSource {
  title: string;
  url: string;
}

@Component({
  selector: 'vf-chatbot-sources',
  template: `
    <div
      class="vf-chatbot-sources"
      data-vf-js-chatbot-sources
    >
      <h3>Sources</h3>
      <ul>
        <li *ngFor="let source of sources">
          <a
            [href]="source.url"
            target="_blank"
            rel="noopener noreferrer"
            [attr.aria-label]="source.title + ' (opens in new tab)'"
          >
            {{ source.title }}
          </a>
        </li>
      </ul>
    </div>
  `,
})
export class VfChatbotSourcesAngularComponent implements AfterViewInit {
  @Input() sources: VFChatbotSource[] = [];

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
  }
}

export * from './vf-chatbot-sources.angular.module';
