
import { SportActions, SportActionTypes } from './sport.actions';

export const sportFeatureKey = 'sport';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: SportActions): State {
  switch (action.type) {

    case SportActionTypes.LoadSports:
      return state;

    default:
      return state;
  }
}
