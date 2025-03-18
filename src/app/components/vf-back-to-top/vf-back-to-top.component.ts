import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vf-back-to-top',
  templateUrl: './vf-back-to-top.component.html'
})
export class VfBackToTopComponent {
  // Component logic here if needed
}

@Component({
  selector: 'vf-back-to-top',
  template: `
      <div
        class="vf-back-to-top vf-back-top--{{ type }}"
        data-vf-js-back-to-top
        [attr.vf-back-top--floating]="type === 'floating' ? '' : null"
      >
        <a
          [href]="scrollToId !== undefined ? '#' + scrollToId : null"
          [attr.data-scroll-to-id]="
            scrollToId !== undefined ? scrollToId : null
          "
          class="vf-button vf-button--secondary vf-button--sm"
          [attr.aria-label]="text"
        >
          <svg
            class="vf-icon vf-icon--search-btn | vf-button__icon"
            viewBox="0 0 140 140"
            width="16"
            height="16"
          >
            <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
              <path
                d="M23.421,11.765,13.768.8A2.641,2.641,0,0,0,12,0a2.645,2.645,0,0,0-1.768.8L.579,11.765A1.413,1.413,0,1,0,2.7,13.632l7.45-8.466a.25.25,0,0,1,.437.166V22.587a1.413,1.413,0,1,0,2.826,0V5.332a.25.25,0,0,1,.438-.165L21.3,13.632a1.413,1.413,0,1,0,2.121-1.867Z"
                fill="#3b6fb6"
                stroke="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
              ></path>
            </g>
          </svg>
          {{ text }}
        </a>
      </div>
  `,
  styles: [],
})
export class VfBackToTopAngularComponent {
  /* Initialize values based on input values */
  @Input() type: string | undefined;
  @Input() text: string | undefined;
  @Input() scrollToId: string | undefined;
  @Input() example: boolean | undefined;

  ngOnChanges(): void {
    this.text = this.text || 'Back to top';
  }
}
