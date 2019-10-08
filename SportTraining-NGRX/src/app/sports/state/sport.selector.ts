import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromSportState from './sport.reducer';

export const getSportState = createFeatureSelector<
fromSportState.SportState
>('sport');

export const getSportLoadingIndicator = createSelector(
  getSportState,
  fromSportState.getLoading
);

export const getSportLoadedIndicator = createSelector(
  getSportState,
  fromSportState.getLoaded
);

export const selectAllSports = createSelector(getSportState, fromSportState.selectAllSport);
