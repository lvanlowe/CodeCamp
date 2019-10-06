import { TeamState } from './team.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

const getteamsFeatureState = createFeatureSelector<TeamState>('Team');

export const getTeams = createSelector(
  getteamsFeatureState,
  state => (state ? state.teams : null)
);

export const getCurrentTeamId = createSelector(
  getteamsFeatureState,
  state => (state ? state.currentTeamid : null)
);

export const getTeam = createSelector(
  getteamsFeatureState,
  getCurrentTeamId,
  (state, currentTeamid) => {
    if (currentTeamid === null) {
      return null;
    }
    return state ? state.teams.find(s => s.id === currentTeamid) : null;
  }
);

export const getTeamLoadingIndicator = createSelector(
  getteamsFeatureState,
  state => (state ? state.loading : null)
);

export const getTeamLoadedIndicator = createSelector(
  getteamsFeatureState,
  state => (state ? state.loaded : null)
);
