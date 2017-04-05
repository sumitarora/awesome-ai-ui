import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  CTA_CLICKED:  type('[CTA] CTA Clicked'),
  PREDICTION:  type('[PREDICTION] Prediction'),
  RESET:  type('[RESET] Reset')
};

export class CtaClickedAction implements Action {
  type = ActionTypes.CTA_CLICKED;

  constructor(public payload: number) { }
}

export class PredictionReceived implements Action {
  type = ActionTypes.PREDICTION;

  constructor(public payload: any) { }
}

export class Reset implements Action {
  type = ActionTypes.RESET;

  constructor(public payload: any) { }
}

export type Actions = CtaClickedAction
 | PredictionReceived
 | Reset;