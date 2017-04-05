import { Action } from '@ngrx/store';
import { createMetaReducer } from 'redux-beacon';
import { GoogleAnalytics } from 'redux-beacon/targets/google-analytics';
import { Subject } from 'rxjs';

import * as actions from './actions/analytics';

export const pageView = {
  eventFields: (action: Action): any => ({
    hitType: 'pageview',
    page: action.payload.path
  }),
};

export const ctaClicked = {
  eventFields: (action: actions.CtaClickedAction): any => {
    let page = 'contact-us';
    if (action.payload === 1) {
      page = 'inoffice-training';
    } else if (action.payload === 2){
      page = 'online-training';
    }
    return {
      hitType: 'event',
      page,
      eventCategory: 'cta-Clicked',
      eventAction: page
    };
  }
};

export const eventsMap = {
  '[Router] Update Location': pageView,
  '[CTA] CTA Clicked': ctaClicked,
};

export const analyticsMiddlewareGoogleAnalytics = createMetaReducer(eventsMap, GoogleAnalytics);
export const analyticsMiddlewareCustom = createMetaReducer(eventsMap, sendEvents);

function sendEvents(events) {
  events.forEach((event) => {
    analyticsSubject.next(event);
  });
}

export const analyticsSubject: Subject<any>  = new Subject();
