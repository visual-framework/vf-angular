import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-vf-blockquote',
  templateUrl: './vf-blockquote.component.html'
})
export class VfBlockquoteComponent {
  // Component logic here if needed
}

@Component({
  selector: 'vf-blockquote',
  template: `
    <blockquote [attr.id]="id !== undefined ? id : null" [class]="class">
        <img *ngIf="blockquote_author_imageurl !== ''" [class]="authorimgclass" [src]="blockquote_author_imageurl" alt="" loading="lazy" />
        <div [class]="blockquote_author_imageurl !== '' ? 'vf-blockquote-has-image' : null">
          <div>{{ quote }}</div>
          <footer class="vf-u-margin__top--600">
            <a *ngIf="blockquote_author_href !== ''; else quoteauthorplain" class="vf-blockquote_author__link" [href]="blockquote_author_href" [innerHTML]="blockquote_author"></a>
            <ng-template #quoteauthorplain><div class="vf-blockquote_author">{{ blockquote_author }}</div></ng-template>
            <div *ngIf="blockquote_author_details !== ''" class="vf-blockquote_author__details">{{ blockquote_author_details }}</div>
          </footer>
        </div>
    </blockquote>
  `,
  styles: [],
})
export class VfBlockquoteAngularComponent implements OnInit {
  /* Initialize values based on input values */
  @Input() id: string | undefined;
  @Input() html = '';
  @Input() text = '';
  @Input() blockquote_text = '';
  @Input() blockquote_author = '';
  @Input() blockquote_author_href = '';
  @Input() blockquote_author_details = '';
  @Input() blockquote_author_imageurl = '';
  @Input() override_class = '';
  @Input() modifier = 'default';

  class = '';
  authorimgclass = '';
  quote = '';

  ngOnInit(): void {
    //Initialize  something
  }

  ngOnChanges(): void {
    this.setValues();
  }

  /* Set values as per input and updated changes */
  setValues(): void {
    /* Conditional styles, strings, nullables, arrays of styles */
    this.class = this.modifier === 'default' ? 'vf-blockquote' : 'vf-blockquote-small';
    this.class += this.override_class ? this.override_class : '';

    this.authorimgclass = this.modifier === 'default' ? 'vf-profile__image vf-u-margin__right--600' : 'vf-profile__image vf-profile--medium vf-u-margin__right--600';

    /* Inner content of the quote based on whether HTML or Text */
    this.quote = this.blockquote_text
      ? this.blockquote_text
      : this.html
      ? this.html
      : this.text;
  }
}
