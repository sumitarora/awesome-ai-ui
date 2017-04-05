import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as actions from '../actions/analytics';

import { SessionService } from './session';
import { analyticsSubject } from '../analytics';

@Injectable()
export class AnalyticsService {
  // private API_PATH: string = 'http://localhost:9000/events';
  private API_PATH: string = 'https://awesome-ai.herokuapp.com/events';

  constructor(
    private store: Store<fromRoot.State>,
    private http: Http,
    private sessionService: SessionService) {
    analyticsSubject.subscribe(this.sendEvent.bind(this));
  }

  sendEvent(event: any) {
    const ip = this.sessionService.getCookie('ip');
    event.sessionId = this.sessionService.checkSession();
    event.ip = ip;
    console.log(event);

    this.http.post(`${this.API_PATH}`, event)
      .map(r => r.json())
      .subscribe((data) => {
        this.store.dispatch(new actions.PredictionReceived(data));
      });
  }
}
