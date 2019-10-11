import { createAction, union } from '@ngrx/store';
import { Team } from 'src/app/team';


export const LoadTeams  = createAction(
  '[Team] Load Teams',
  (payload: { }) => ({ payload })
);

export const LoadTeamSuccess  = createAction(
  '[Team] Load Team Success',
  (payload: { team: Team[] }) => ({ payload })
);

export const LoadTeamFail = createAction(
  '[Team] Load Team Fail',
  (payload: { error: string }) => ({ payload })
);

export const UpdateTeams  = createAction(
  '[Team] Update Teams',
  (payload: { team: Team }) => ({ payload })
);

export const UpdateTeamSuccess  = createAction(
  '[Team] Update Team Success',
  (payload: { }) => ({ payload })
);

export const UpdateTeamFail = createAction(
  '[Team] Update Team Fail',
  (payload: { error: string }) => ({ payload })
);

export const SetCurrentTeam = createAction(
  '[Team] Set Current Team',
  (payload: { id: number }) => ({ payload })
);

export const SetCurrentLocation = createAction(
  '[Location] Set Current Location',
  (payload: { id: number }) => ({ payload })
);

const TeamActions = union({
  LoadTeams,
  LoadTeamSuccess,
  LoadTeamFail,
  UpdateTeams,
  UpdateTeamSuccess,
  UpdateTeamFail,
  SetCurrentTeam,
  SetCurrentLocation,
});

export type TeamUnion = typeof TeamActions;

