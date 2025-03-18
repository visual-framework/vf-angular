import { Component, OnInit } from '@angular/core';
import { vfMegaMenu } from '@visual-framework/vf-mega-menu/vf-mega-menu.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  navItems = [
    { label: 'About', hasDropdown: true },
    { label: 'Components', hasDropdown: true },
    { label: 'GitHub', hasDropdown: false },
    { label: 'Slack', hasDropdown: false },
    { label: 'Search', hasDropdown: true }
  ];

  ngOnInit() {
    vfMegaMenu();
  }
}
