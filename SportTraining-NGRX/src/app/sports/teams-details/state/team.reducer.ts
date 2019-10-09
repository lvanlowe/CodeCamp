import * as fromRoot from '../../state/sport.reducer';
import { TeamActions, TeamActionTypes } from './team.actions';
import { Team } from 'src/app/team';

export interface State extends fromRoot.State {
  team: TeamState;
}
export const teamFeatureKey = 'team';

export interface TeamState {
  currentTeamid: number;
  teams: Team[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: TeamState = {
  currentTeamid: 0,
  teams: [],
  loaded: false,
  loading: false,
  error: '',
};

export function reducer(state = initialState, action: TeamActions): TeamState {
  let updatedTeams: Team[];
  switch (action.type) {

    case TeamActionTypes.LoadTeamsLocation:
      return { ...state, loaded: false, loading: true };

    case TeamActionTypes.LoadTeamsCategory:
      return { ...state, loaded: false, loading: true };

    case TeamActionTypes.LoadTeamSuccess:
      return {
          ...state,
          loaded: true,
          loading: false,
          teams: action.payload,
          error: '',
      };

    case TeamActionTypes.GetTeam:
      return { ...state, currentTeamid: action.payload };

    case TeamActionTypes.GetTeamSuccess:
        const TeamRecord = action.payload;
        if (state.teams.find(p => p.id === TeamRecord.id)) {
            updatedTeams = state.teams.map(item =>
            action.payload.id === item.id ? TeamRecord : item
          );
          }
        return {
          ...state,
          teams: updatedTeams,
          loaded: true,
          loading: false,
          currentTeamid: action.payload.id,
        };

        case TeamActionTypes.UpdateTeam:
          updatedTeams = state.teams.map(item =>
            action.payload.id === item.id ? action.payload : item
          );
          return { ...state, teams: updatedTeams, loaded: false, loading: true };

          case TeamActionTypes.UpdateTeamSuccess:
            return {
              ...state,
              loaded: true,
              loading: false,
            };
    default:
      return state;
  }
}
