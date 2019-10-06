import { SportState } from './sport.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

const getSportsFeatureState = createFeatureSelector<SportState>('sport');

export const getSports = createSelector(
  getSportsFeatureState,
  state => (state ? state.sports : null)
);

export const getCurrentSportId = createSelector(
  getSportsFeatureState,
  state => (state ? state.currentSportID : null)
);

export const getSport = createSelector(
  getSportsFeatureState,
  getCurrentSportId,
  (state, currentSportId) => {
    if (currentSportId === null) {
      return null;
    }
    return state ? state.sports.find(s => s.id === currentSportId) : null;
  }
);

export const getSportLoadingIndicator = createSelector(
  getSportsFeatureState,
  state => (state ? state.loading : null)
);

export const getSportLoadedIndicator = createSelector(
  getSportsFeatureState,
  state => (state ? state.loaded : null)
);
