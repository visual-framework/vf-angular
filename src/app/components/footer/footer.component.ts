import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class AppFooterComponent {
  currentYear = new Date().getFullYear();
  
  footerLinks = {
    resources: [
      { name: 'Documentation', url: '/docs' },
      { name: 'Components', url: '/components' },
      { name: 'Patterns', url: '/patterns' },
      { name: 'Templates', url: '/templates' }
    ],
    community: [
      { name: 'GitHub', url: 'https://github.com/visual-framework' },
      { name: 'Discord', url: 'https://discord.gg/visual-framework' },
      { name: 'Twitter', url: 'https://twitter.com/vf_framework' },
      { name: 'Blog', url: '/blog' }
    ],
    support: [
      { name: 'FAQ', url: '/faq' },
      { name: 'Support', url: '/support' },
      { name: 'Contact', url: '/contact' },
      { name: 'Status', url: '/status' }
    ]
  };
}
