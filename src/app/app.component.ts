import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet> <!-- This will display routed components -->
    <app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'visual-framework';
}