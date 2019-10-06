
import { LocationActions, LocationActionTypes } from './location.actions';

export const locationFeatureKey = 'location';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: LocationActions): State {
  switch (action.type) {

    case LocationActionTypes.LoadLocations:
      return state;

    default:
      return state;
  }
}
