import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-vf-tabs',
  templateUrl: './vf-tabs.component.html'
})
export class VfTabsComponent {
  // Component logic here if needed

  public tabsdata = [
    [
      { tab_title: `Section` },
      { tab_number: 1 },
      { tab_heading: `Section 1` },
      { tab_content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. <a class='vf-link' href='#'>Nam luctus</a>, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus. Praesent non odio bibendum magna bibendum accumsan.` }
    ],
    [
      { tab_title : `A Short Section` },
      { tab_number: 2 },
      { tab_heading: `Section 2` },
      { tab_content: `Nullam at diam nec arcu suscipit auctor non a erat. Sed et magna semper, eleifend magna non, facilisis nisl. Proin et est et lorem dictum finibus ut nec turpis. Aenean nisi tortor, euismod a mauris a, mattis scelerisque tortor. Sed dolor risus, varius a nibh id, condimentum lacinia est. In lacinia cursus odio a aliquam. Curabitur tortor magna, laoreet ut rhoncus at, sodales consequat tellus.` }
    ],
    [
      { tab_title: `Section` },
      { tab_number: 58 },
      { tab_heading: `Section 1` },
      { tab_content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. <a class='vf-link' href='#'>Nam luctus</a>, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus. Praesent non odio bibendum magna bibendum accumsan.` }
    ],
    [
      { tab_title: `A Short Section` },
      { tab_number: 546 },
      { tab_heading: `Section 2` },
      { tab_content: `Nullam at diam nec arcu suscipit auctor non a erat. Sed et magna semper, eleifend magna non, facilisis nisl. Proin et est et lorem dictum finibus ut nec turpis. Aenean nisi tortor, euismod a mauris a, mattis scelerisque tortor. Sed dolor risus, varius a nibh id, condimentum lacinia est. In lacinia cursus odio a aliquam. Curabitur tortor magna, laoreet ut rhoncus at, sodales consequat tellus.` }
    ],
    [
      { tab_title: `A Rather Long Section` },
      { tab_number: 878 },
      { tab_heading: `Section 3` },
      { tab_content: `Phasellus ac tristique orci. Nulla maximus <a class='vf-link' href='#'>justo nec dignissim consequat</a>. Sed vehicula diam sit amet mi efficitur vehicula in in nisl. Aliquam erat volutpat. Suspendisse lorem turpis, accumsan consequat consectetur gravida, <a class='vf-link' href='#'>pellentesque ac ante</a>. Aliquam in commodo ligula, sit amet mollis neque. Vestibulum at facilisis massa.` }
    ],
    [
      { tab_title: `Nested Tabs` },
      { tab_number: 8793456 },
      { tab_heading: `Section 4` },
      { tab_content: `
            <div class="vf-tabs">
              <ul class="vf-tabs__list" data-vf-js-tabs>
                <li class="vf-tabs__item">
                  <a class="vf-tabs__link" href="#vf-tabs__section-nested--234548">Nested tab 1</a>
                </li>
                <li class="vf-tabs__item">
                  <a class="vf-tabs__link" href="#vf-tabs__section-nested--29974">Nested tab 2</a>
                </li>
              </ul>
            </div>

            <div class="vf-tabs-content" data-vf-js-tabs-content>
              <section class="vf-tabs__section" id="vf-tabs__section-nested--234548">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. <a href="#">Nam luctus</a>, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus. Praesent non odio bibendum magna bibendum accumsan.</p>
              </section>
              <section class="vf-tabs__section" id="vf-tabs__section-nested--29974">
                <p>Nullam at diam nec arcu suscipit auctor non a erat. Sed et magna semper, eleifend magna non, facilisis nisl. Proin et est et lorem dictum finibus ut nec turpis. Aenean nisi tortor, euismod a mauris a, mattis scelerisque tortor. Sed dolor risus, varius a nibh id, condimentum lacinia est. In lacinia cursus odio a aliquam. Curabitur tortor magna, laoreet ut rhoncus at, sodales consequat tellus.</p>
              </section>
            </div>`}
    ],
    [
      {tab_title: `A fifth section`},
      {tab_number: 545541},
      {tab_heading: `Section 5`},
      {tab_content: `Phasellus ac tristique orci. Nulla maximus <a class="vf-link" href="#">justo nec dignissim consequat</a>. Sed vehicula diam sit amet mi efficitur vehicula in in nisl. Aliquam erat volutpat. Suspendisse lorem turpis, accumsan consequat consectetur gravida, <a class="vf-link" href="#">pellentesque ac ante</a>. Aliquam in commodo ligula, sit amet mollis neque. Vestibulum at facilisis massa.`}
    ],
    [
      {tab_title: `A sixth section`},
      {tab_number: 621211},
      {tab_heading: `Section 6`},
      {tab_content: `Phasellus ac tristique orci. Nulla maximus <a class="vf-link" href="#">justo nec dignissim consequat</a>. Sed vehicula diam sit amet mi efficitur vehicula in in nisl. Aliquam erat volutpat. Suspendisse lorem turpis, accumsan consequat consectetur gravida, <a class="vf-link" href="#">pellentesque ac ante</a>. Aliquam in commodo ligula, sit amet mollis neque. Vestibulum at facilisis massa.`}
    ],
    [
      { tab_title: `Section` },
      { tab_number: 99999 },
      { tab_heading: `Default` },
      { tab_content: `An <a href="/#vf-tabs__section--88888">example deep link</a> loading this anchor will directly activate the neighbouring tab. <code>/vf-tabs#vf-tabs__section--88888</code>` }
    ],
    [
      { tab_title: `A Short Section` },
      { tab_number: 88888 },
      { tab_heading: `Deep-linked tab` },
      { tab_content: `If you see me on page load, the deep link has worked.` }
    ]
  ];
}

declare function vfTabs(): any;

@Component({
  selector: "vf-tabs",
  template: `
    <div class="vf-tabs">
      <ul class="vf-tabs__list" data-vf-js-tabs>
        <li class="vf-tabs__item" *ngFor="let item of tabs">
          <a
            class="vf-tabs__link"
            href="#vf-tabs__section--{{item[1].tab_number}}"
            [innerHTML]="item[0].tab_title">
          </a>
        </li>
      </ul>
    </div>
    <div class="vf-tabs-content" data-vf-js-tabs-content>
      <section
        class="vf-tabs__section"
        id="vf-tabs__section--{{item[1].tab_number}}"
        *ngFor="let item of tabs"
      >
        <h2 *ngIf="item[2].tab_heading !== ''" [innerHTML]="sanitizeHTML(item[2].tab_heading)"></h2>
        <p [innerHTML]="sanitizeHTML(item[3].tab_content)"></p>
      </section>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VfTabsAngularComponent implements AfterViewInit {
  @Input() tabsdata: any;
  tabs:any;
  constructor(private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) {}

  ngOnChanges(): void {
    this.setValues();
  }

  /* Set values as per input and updated changes */
  setValues(): void {
    /* Initialize/Reset the values for class and style */
    this.tabs = this.tabsdata;
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    // vfTabs();
  }

  sanitizeHTML(t: any){
    return this.sanitizer.bypassSecurityTrustHtml(t);
  }
}
