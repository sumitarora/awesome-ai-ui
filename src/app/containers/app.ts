import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AnalyticsService } from '../services/analytics';
import { SessionService } from '../services/session';

import * as fromRoot from '../reducers';
import * as actions from '../actions/analytics';

// "training-online" => cta1
// "training-inoffice" => cta2
// "contact-us" => cta3

@Component({
  selector: 'main-app',
  template: `
    <header>
      <a href="#/">
        <img width="250px" src="assets/logo-rangleio-wordmark-white2.svg"/>
      </a>
    </header>  
    <nav style="margin-top: 30px;">
    <br/>
    <div>
      <button (click)="setIp('1.6.0.0')" class="btn-home">Set Asia Mock IP</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button (click)="setIp('75.98.192.82')" class="btn-home">Set Canada Mock IP</button>
    </div>
    <br/>
    <br/>
    <a class="link" href="#/services">Services</a>
    <a class="link" href="#/process">Process</a>
    <a class="link" href="#/work">Work</a>
    <a class="link" href="#/resources">Resources</a>
    <a class="link" href="#/tech-stack">TechStack</a>
    <a class="link" href="#/blog">Blog</a>
    </nav>
    <br/><br/>
    <router-outlet></router-outlet>
    <h3 style="border:none;">
      {{(cta$ | async) | json}}
    </h3>
    <br/>
    <div style="text-align: center;">
      <cta-contact *ngIf="showCta3" (clicked)="bannerClicked($event)"></cta-contact>
      <cta-inoffice-training *ngIf="showCta2" (clicked)="bannerClicked($event)"></cta-inoffice-training>
      <cta-online-training *ngIf="showCta1" (clicked)="bannerClicked($event)"></cta-online-training>
    </div>
  `
})
export class AppComponent {
  cta$: Observable<any>;

  showCta1: boolean = false;
  showCta2: boolean = false;
  showCta3: boolean = false;

  constructor(
    private store: Store<fromRoot.State>,
    private analyticsService: AnalyticsService,
    private sessionService: SessionService) {
    console.log(this.analyticsService, this.sessionService);
    this.cta$ = store.select(fromRoot.getAllCta);
    this.cta$.subscribe((ctas) => {
      this.showCta1 = this.showCta2 = this.showCta3 = false;
      if (ctas.cta1 > ctas.cta2 && ctas.cta1 > ctas.cta3) {
        this.showCta1 = true;
      } else if (ctas.cta2 > ctas.cta1 && ctas.cta2 > ctas.cta3) {
        this.showCta2 = true;
      } else if (ctas.cta3 > ctas.cta1 && ctas.cta3 > ctas.cta2) {
        this.showCta3 = true;
      }
    });
  }

  setIp(ip: string) {
    this.sessionService.setCookie('ip', ip, 60 * 60 * 1000);
    this.sessionService.resetSession();
    this.store.dispatch(new actions.Reset(undefined));
  }

  bannerClicked(data: any) {
    this.store.dispatch(new actions.CtaClickedAction(data.type));
    this.sessionService.resetSession();
  }
}
