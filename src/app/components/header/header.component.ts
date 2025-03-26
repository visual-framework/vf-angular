import { Component, OnInit } from '@angular/core';
import { vfMegaMenu } from '@visual-framework/vf-mega-menu/vf-mega-menu.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  ngOnInit() {
    vfMegaMenu();
  }
}
