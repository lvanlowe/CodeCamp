import * as fromRoot from '../../state/sport.reducer';
import { LocationActions, LocationActionTypes } from './location.actions';
import { Program } from 'src/app/location';

export interface State extends fromRoot.State {
  location: LocationState;
}
export const locationFeatureKey = 'location';

export interface LocationState {
  currentLocationID: number;
  Locations: Program[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: LocationState = {
  currentLocationID: 0,
  Locations: [],
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
          Locations: action.payload,
          error: '',
      };

    case LocationActionTypes.GetLocation:
      return { ...state, currentLocationID: action.payload };

    case LocationActionTypes.GetLocationSuccess:
        const LocationRecord = action.payload;
        if (state.Locations.find(p => p.id === LocationRecord.id)) {
            updatedLocations = state.Locations.map(item =>
            action.payload.id === item.id ? LocationRecord : item
          );
          }
        return {
          ...state,
          Locations: updatedLocations,
          loaded: true,
          loading: false,
          currentLocationID: action.payload.id,
        };

        case LocationActionTypes.UpdateLocation:
          updatedLocations = state.Locations.map(item =>
            action.payload.id === item.id ? action.payload : item
          );
          return { ...state, Locations: updatedLocations, loaded: false, loading: true };

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
