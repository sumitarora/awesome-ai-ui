import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cta-inoffice-training',
  template: `
    <a (click)="trainingClicked()" class="services-outline__block__cta outline-button" style="font-size: 1.5em;font-weight: bold;">
      In Office Training
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
export class CtaInOfficeTrainingComponent {

  @Output() clicked = new EventEmitter();

  trainingClicked() {
    this.clicked.emit({type: 1});
  }
}
