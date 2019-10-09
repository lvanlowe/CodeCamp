import * as fromLocationState from './location.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getLocationState = createFeatureSelector<
fromLocationState.LocationState
>('location');

export const getLocationLoadingIndicator = createSelector(
  getLocationState,
  fromLocationState.getLoading
);

export const getLocationLoadedIndicator = createSelector(
  getLocationState,
  fromLocationState.getLoaded
);

export const getLocationCurrentid = createSelector(
  getLocationState,
  fromLocationState.getCurrentid
);

export const selectAllLocations = createSelector(getLocationState, fromLocationState.selectAllLocation);

export const selectLocationEntities = createSelector(getLocationState, fromLocationState.selectLocationEntities);

export const selectLocation = createSelector(
  getLocationCurrentid,
  selectLocationEntities,
  (id, LocationEntities) => LocationEntities[id]
);


