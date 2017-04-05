import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cta-contact',
  template: `
    <a (click)="contactClicked()" class="services-outline__block__cta outline-button" style="font-size: 1.5em;font-weight: bold;">
      Contact Us
    </a>
  `,
  styles: [`
    :host {
      text-align: center;
      color: #ffffff;
    }
    .banner-logo {
      width: 100px;
    }
    .outline-button {
      width: 200px;
    }
  `]
})
export class CtaContactComponent {

  @Output() clicked = new EventEmitter();

  contactClicked() {
    this.clicked.emit({type: 0});
  }

 }
