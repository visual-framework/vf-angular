import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet  (activate)="changeOfRoutes()"></router-outlet> <!-- This will display routed components -->
    <app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'visual-framework';

  changeOfRoutes() {
    // Remove vf-mega-menu element when route changes
    const vfMegaMenuContent = document.querySelector('.vf-mega-menu__content');
    if (vfMegaMenuContent) {
      vfMegaMenuContent.setAttribute('aria-hidden', 'true');
      // Remove expanded state from any active menu items
      const expandedLinks = document.querySelectorAll('.vf-mega-menu__link.is-expanded');
      expandedLinks.forEach(link => (link as HTMLElement).click());
    }
  }
}
