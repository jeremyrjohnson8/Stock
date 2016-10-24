import { Component } from '@angular/core';

@Component({
  selector: 'stock-logo',
  styles: [require('./logo.css')],
  template: `
    <div className="flex items-center">
      <img
        class="logo"
        [src]="LogoImage"
        alt="Stock Pile"
      />
    </div>
  `
})
export class AtomicLogo {
  private LogoImage = require('../../../public/img/atomiclogo.png');
};
