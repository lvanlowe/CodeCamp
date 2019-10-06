import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {  map, mergeMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as teamActions from './team.actions';
import { TeamService } from '../../service/team.service';
import { Action } from '@ngrx/store';
import { Team } from 'src/app/team';



@Injectable()
export class TeamEffects {

  constructor(private teamService: TeamService, private actions$: Actions) {}

  @Effect()
  loadTeamsByLocation$: Observable<Action> = this.actions$.pipe(
    ofType(teamActions.TeamActionTypes.LoadTeamsLocation),
    map((action: teamActions.LoadTeamsLocation) => action.payload),
    mergeMap((locationid: number) =>
      this.teamService.getTeamsByLocation(locationid).pipe(
        map(teams => new teamActions.LoadTeamSuccess(teams)),
        catchError(err => of(new teamActions.LoadTeamFail(err)))
      )
    )
  );

  @Effect()
  loadTeamsByCategory$: Observable<Action> = this.actions$.pipe(
    ofType(teamActions.TeamActionTypes.LoadTeamsCategory),
    map((action: teamActions.LoadTeamsCategory) => action.payload),
    mergeMap((categoryid: number) =>
      this.teamService.getTeamsByCategory(categoryid).pipe(
        map(teams => new teamActions.LoadTeamSuccess(teams)),
        catchError(err => of(new teamActions.LoadTeamFail(err)))
      )
    )
  );

  @Effect()
  updateTeams$: Observable<Action> = this.actions$.pipe(
    ofType(teamActions.TeamActionTypes.UpdateTeam),
    map((action: teamActions.UpdateTeam) => action.payload),
    mergeMap((team: Team) =>
      this.teamService.updateTeam(team).pipe(
        map(teams => new teamActions.UpdateTeamSuccess()),
        catchError(err => of(new teamActions.UpdateTeamFail(err)))
      )
    )
  );

}
