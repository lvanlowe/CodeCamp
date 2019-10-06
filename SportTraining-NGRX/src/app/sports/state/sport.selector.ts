import { SportState } from './sport.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

const getSportsFeatureState = createFeatureSelector<SportState>('sport')

export const getSports = createSelector(
  getSportsFeatureState,
  state => (state ? state.sports : null)
)

export const getSportLoadingIndicator = createSelector(
  getSportsFeatureState,
  state => (state ? state.loading : null)
)
