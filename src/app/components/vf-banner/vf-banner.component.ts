import { Component } from '@angular/core';
import { vfBanner } from '@visual-framework/vf-banner/vf-banner.js';

@Component({
  selector: 'app-vf-banner',
  templateUrl: './vf-banner.component.html'
})
export class VfBannerComponent {
  // Component logic here if needed
  ngOnInit() {
    vfBanner();
  }
}