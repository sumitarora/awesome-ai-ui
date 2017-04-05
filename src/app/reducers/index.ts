import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../environments/environment';

import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as analyticsReducer from './analytics';
import * as analytics from '../analytics';

export interface State {
  analytics: analyticsReducer.State;
  router: fromRouter.RouterState;
}

const reducers = {
  analytics: analyticsReducer.reducer,
  router: analytics.analyticsMiddlewareCustom(fromRouter.routerReducer),
  router2: analytics.analyticsMiddlewareGoogleAnalytics(fromRouter.routerReducer),
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}

export const getAnalyticsState = (state: State) => state.analytics;


export const getAllCta = createSelector(getAnalyticsState, analyticsReducer.getAllCta);