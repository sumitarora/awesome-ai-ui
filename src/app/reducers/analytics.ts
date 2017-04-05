import * as analytics from '../actions/analytics';

export interface State {
  cta1: number;
  cta2: number;
  cta3: number;
}

const initialState: State = {
  cta1: 0,
  cta2: 0,
  cta3: 0
};

export function reducer(state = initialState, action: analytics.Actions): State {
  switch (action.type) {
    case analytics.ActionTypes.PREDICTION:
      return Object.assign({}, state, {
        cta1: action.payload.cta1,
        cta2: action.payload.cta2,
        cta3: action.payload.cta3
      });

    case analytics.ActionTypes.RESET:
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
}

export const getAllCta = (state: State) => {
  return {
    cta1: state.cta1,
    cta2: state.cta2,
    cta3: state.cta3
  };
};
