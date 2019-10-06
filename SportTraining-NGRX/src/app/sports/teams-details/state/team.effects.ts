import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { TeamActionTypes, TeamActions } from './team.actions';



@Injectable()
export class TeamEffects {


  @Effect()
  loadTeams$ = this.actions$.pipe(
    ofType(TeamActionTypes.LoadTeams),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<TeamActions>) {}

}
