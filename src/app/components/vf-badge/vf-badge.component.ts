import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vf-badge',
  templateUrl: './vf-badge.component.html'
})
export class VfBadgeComponent {
  // Component logic here if needed
}

@Component({
  selector: "vf-badge",
  template: `
    <a [attr.id] = "id !== undefined ? id : null" *ngIf="badge_href !== ''" [href]="badge_href" [class]="class" [innerHTML]="content"></a>
    <span [attr.id] = "id !== undefined ? id : null" *ngIf="!badge_href || badge_href === null || badge_href === ''" [class]="class" [innerHTML]="content"></span>
  `,
  styleUrls: []
})

export class VfBadgeAngularComponent implements OnInit {
  /* Initialize values based on input values */
  @Input() badge_href = '';
  @Input() theme = '';
  @Input() text = '';
  @Input() style: Array<'primary' | 'secondary' | 'tertiary'> = [];
  @Input() html = '';
  @Input() override_class = '';
  @Input() id: string | undefined;
  content =  '';
  class = 'vf-badge ';

  ngOnInit(): void {
    this.setValues();
  }

  ngOnChanges(): void {
    this.setValues();
  }

  /* Set values as per input and updated changes */
  setValues(): void {
    /* Set values ass per the input */
    this.content = this.html !== '' ? this.html : this.text;
    this.class += this.theme !== '' ? 'vf-badge--' + this.theme +  ' ' : '';
    /* Update class value if styles are received in input */
    if(this.style.length > 0) {
      this.style.forEach(style => {
        this.class += 'vf-badge--' + style +  ' ';
      });
    }
    /* Update class value if override style received in input */
    this.class += this.override_class !== '' ? '| ' + this.override_class : '';
  }
}
