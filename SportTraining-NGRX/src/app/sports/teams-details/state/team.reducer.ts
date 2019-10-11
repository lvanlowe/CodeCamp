import * as fromRoot from '../../state/sport.reducer';
import * as fromActions from './team.actions';
import { Team } from 'src/app/team';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface State extends fromRoot.State {
  team: TeamState;
}
export const teamFeatureKey = 'team';

export const teamAdapter: EntityAdapter<
  Team
> = createEntityAdapter<Team>({});

export interface TeamState
  extends EntityState<Team> {
    currentid: number;
    currentLocationid: number;
    loaded: boolean;
    loading: boolean;
    error: string;
}

export const initialState: TeamState = teamAdapter.getInitialState(
  {
    currentid: 0,
    currentLocationid: 0,
    loaded: false,
    loading: false,
    error: '',
  }
);


export const {
  selectIds: selectTeamIds,
  selectEntities: selectTeamEntities,
  selectAll: selectAllTeam,
  selectTotal: teamsCount
} = teamAdapter.getSelectors();

export function reducer(state = initialState, action: fromActions.TeamUnion): TeamState {
  switch (action.type) {

    case fromActions.SetCurrentLocation.type:
      return { ...state, currentLocationid: action.payload.id };
    case fromActions.LoadTeams.type:
      return { ...state, loaded: false, loading: true };
    case fromActions.LoadTeamSuccess.type:
        return {
          ...teamAdapter.addAll(
            action.payload.team,
            state
          ),
            loaded: true,
            loading: false,
            error: '',
        };
    case fromActions.UpdateTeams.type:
        return {
          ...teamAdapter.upsertOne(
          action.payload.team,
          state
        ),
         loaded: false, loading: true };
    case fromActions.UpdateTeamSuccess.type:
        return {
                ...state,
                loaded: true,
                loading: false,
              };
              case fromActions.SetCurrentTeam.type:
                return {
                  ...state,
                 currentid: action.payload.id};
    default:
      return state;
  }

}

export const getLoading = (
  state: TeamState
) => (state ? state.loading : null);

export const getLoaded = (
  state: TeamState
) => (state ? state.loaded : null);

export const getCurrentid = (
  state: TeamState
) => (state ? state.currentid : null);

export const getCurrentLocation = (
  state: TeamState
) => (state ? state.currentLocationid : null);
