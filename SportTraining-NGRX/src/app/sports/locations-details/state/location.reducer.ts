import * as fromRoot from '../../state/sport.reducer';
import { LocationActions, LocationActionTypes } from './location.actions';
import { Program } from 'src/app/location';

export interface State extends fromRoot.State {
  location: LocationState;
}
export const locationFeatureKey = 'location';

export interface LocationState {
  currentLocationid: number;
  locations: Program[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: LocationState = {
  currentLocationid: 0,
  locations: [],
  loaded: false,
  loading: false,
  error: '',
};

export function reducer(state = initialState, action: LocationActions): LocationState {
  let updatedLocations: Program[];
  switch (action.type) {

    case LocationActionTypes.LoadLocations:
      return { ...state, loaded: false, loading: true };

    case LocationActionTypes.LoadLocationSuccess:
      return {
          ...state,
          loaded: true,
          loading: false,
          locations: action.payload,
          error: '',
      };

    case LocationActionTypes.GetLocation:
      return { ...state, currentLocationid: action.payload };

    case LocationActionTypes.GetLocationSuccess:
        const LocationRecord = action.payload;
        if (state.locations.find(p => p.id === LocationRecord.id)) {
            updatedLocations = state.locations.map(item =>
            action.payload.id === item.id ? LocationRecord : item
          );
          }
        return {
          ...state,
          locations: updatedLocations,
          loaded: true,
          loading: false,
          currentLocationid: action.payload.id,
        };

        case LocationActionTypes.UpdateLocation:
          updatedLocations = state.locations.map(item =>
            action.payload.id === item.id ? action.payload : item
          );
          return { ...state, locations: updatedLocations, loaded: false, loading: true };

          case LocationActionTypes.UpdateLocationSuccess:
            return {
              ...state,
              loaded: true,
              loading: false,
            };
    default:
      return state;
  }
}
