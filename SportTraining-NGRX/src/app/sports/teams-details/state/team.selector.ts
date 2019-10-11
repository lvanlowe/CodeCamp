import * as fromTeamState from './team.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';


export const getTeamState = createFeatureSelector<
fromTeamState.TeamState
>('team');

export const getTeamLoadingIndicator = createSelector(
  getTeamState,
  fromTeamState.getLoading
);

export const getTeamLoadedIndicator = createSelector(
  getTeamState,
  fromTeamState.getLoaded
);

export const getTeamCurrentid = createSelector(
  getTeamState,
  fromTeamState.getCurrentid
);

export const getTeamCurrentLocation = createSelector(
  getTeamState,
  fromTeamState.getCurrentLocation
);

export const getTeamCurrentCategory = createSelector(
  getTeamState,
  fromTeamState.getCurrentCategory
);

export const selectAllTeams = createSelector(getTeamState, fromTeamState.selectAllTeam);

export const selectTeamEntities = createSelector(getTeamState, fromTeamState.selectTeamEntities);

export const selectTeam = createSelector(
  getTeamCurrentid,
  selectTeamEntities,
  (id, TeamEntities) => TeamEntities[id]
);

export const selectTeamsByLocation = createSelector(
  getTeamCurrentLocation,
  selectAllTeams,
  (locationid, teams) => teams.filter(team => team.locationid === locationid)
);

export const selectTeamsByCategory = createSelector(
  getTeamCurrentCategory,
  selectAllTeams,
  (categoryid, teams) => teams.filter(team => team.categoryid === categoryid)
);
