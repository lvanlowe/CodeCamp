import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {  map, exhaustMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as fromActions from './team.actions';
import { TeamService } from '../../service/team.service';
import { Action } from '@ngrx/store';
import { Team } from 'src/app/team';



@Injectable()
export class TeamEffects {

  constructor(private teamService: TeamService, private actions$: Actions) {}


  @Effect()
  loadTeam$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LoadTeams.type),
    exhaustMap((teamActions: any) =>
      this.teamService
        .getTeams()
        .pipe(
          map((entities: Team[]) =>
            fromActions.LoadTeamSuccess({
              team: entities,
            })
          ),
          catchError(({ message }) =>
            of(
              fromActions.UpdateTeamFail({
                error: message,
              })
            )
          )
        )
    )
  );

  @Effect()
  updateTeam$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.UpdateTeams.type),
    exhaustMap((teamActions: any) =>
      this.teamService
        .updateTeam(teamActions.payload.team)
        .pipe(
          map((entities: Team) =>
            fromActions.UpdateTeamSuccess({
              team: entities,
            })
          ),
          catchError(({ message }) =>
            of(
              fromActions.UpdateTeamFail({
                error: message,
              })
            )
          )
        )
    )
  );
 

}
