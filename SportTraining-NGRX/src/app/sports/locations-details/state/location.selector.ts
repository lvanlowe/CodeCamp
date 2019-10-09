import { LocationState } from './location.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

const getLocationsFeatureState = createFeatureSelector<LocationState>('location');

export const getLocations = createSelector(
  getLocationsFeatureState,
  state => (state ? state.locations : null)
);

export const getCurrentLocationId = createSelector(
  getLocationsFeatureState,
  state => (state ? state.currentLocationid : null)
);

export const getLocation = createSelector(
  getLocationsFeatureState,
  getCurrentLocationId,
  (state, currentLocationid) => {
    if (currentLocationid === null) {
      return null;
    }
    return state ? state.locations.find(s => s.id === currentLocationid) : null;
  }
);

export const getLocationLoadingIndicator = createSelector(
  getLocationsFeatureState,
  state => (state ? state.loading : null)
);

export const getLocationLoadedIndicator = createSelector(
  getLocationsFeatureState,
  state => (state ? state.loaded : null)
);
