import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/dashboard">
        <img
          src="./assets/icons/logoNav.png"
          class="align-middle m-1"
          alt="logo"
          style="width: 150px; height: auto;"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
