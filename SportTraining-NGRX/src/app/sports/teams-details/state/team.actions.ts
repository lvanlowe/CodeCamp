import { Action } from '@ngrx/store';
import { Team } from 'src/app/team';

export enum TeamActionTypes {
  LoadTeamsLocation = '[Team] Load Teams Location',
  LoadTeamsCategory = '[Team] Load Teams Category',
  LoadTeamSuccess = '[Team] Load Team Success',
  LoadTeamFail = '[Team] Load Team Fail',
  UpdateTeam = '[Team] Update Team',
  UpdateTeamSuccess = '[Team] Update Team Success',
  UpdateTeamFail = '[Team] Update Team Fail',
  GetTeam = '[Team] Get Team',
  GetTeamSuccess = '[Team] Get Team Success',
  GetTeamFail = '[Team] Get Team Fail',
}

export class LoadTeamsLocation implements Action {
  readonly type = TeamActionTypes.LoadTeamsLocation;

  constructor(public payload: number) {}
}

export class LoadTeamsCategory implements Action {
  readonly type = TeamActionTypes.LoadTeamsCategory;

  constructor(public payload: number) {}
}

export class LoadTeamSuccess implements Action {
  readonly type = TeamActionTypes.LoadTeamSuccess;

  constructor(public payload: Team[]) {}
}

export class LoadTeamFail implements Action {
  readonly type = TeamActionTypes.LoadTeamFail;

  constructor(public payload: string) {}
}

export class UpdateTeam implements Action {
  readonly type = TeamActionTypes.UpdateTeam;

  constructor(public payload: Team) {}
}

export class UpdateTeamSuccess implements Action {
  readonly type = TeamActionTypes.UpdateTeamSuccess;

}

export class UpdateTeamFail implements Action {
  readonly type = TeamActionTypes.UpdateTeamFail;

  constructor(public payload: string) {}
}
export class GetTeam implements Action {
  readonly type = TeamActionTypes.GetTeam;

  constructor(public payload: number) {}
}

export class GetTeamSuccess implements Action {
  readonly type = TeamActionTypes.GetTeamSuccess;

  constructor(public payload: Team) {}
}

export class GetTeamFail implements Action {
  readonly type = TeamActionTypes.GetTeamFail;

  constructor(public payload: string) {}
}


export type TeamActions = LoadTeamsLocation
| LoadTeamsCategory
| LoadTeamSuccess
| LoadTeamFail
| UpdateTeam
| UpdateTeamSuccess
| UpdateTeamFail
| GetTeam
| GetTeamSuccess
| GetTeamFail;
