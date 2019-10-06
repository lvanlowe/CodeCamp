
import { TeamActions, TeamActionTypes } from './team.actions';

export const teamFeatureKey = 'team';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: TeamActions): State {
  switch (action.type) {

    case TeamActionTypes.LoadTeams:
      return state;

    default:
      return state;
  }
}
