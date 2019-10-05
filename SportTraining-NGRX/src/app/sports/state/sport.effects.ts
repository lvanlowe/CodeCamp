import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap, map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY, Observable, of } from 'rxjs';
import * as sportActions from './sport.actions';
import { Action } from '@ngrx/store';
import { SportService } from '../service/sport.service';
// import { Action } from 'rxjs/internal/scheduler/Action';



@Injectable()
export class SportEffects {

  constructor(private sportService: SportService, private actions$: Actions) {}

  // @Effect()
  // loadSports$ = this.actions$.pipe(
  //   ofType(SportActionTypes.LoadSports),
  //   /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //   concatMap(() => EMPTY)
  // );


  @Effect()
  loadSports$: Observable<Action> = this.actions$.pipe(
    ofType(sportActions.SportActionTypes.LoadSports),
    // map((action: sportActions.LoadSports) => action.p),
    mergeMap(() =>
      this.sportService.getSports().pipe(
        map(sports => new sportActions.LoadSportSuccess(sports)),
        catchError(err => of(new sportActions.LoadSportFail(err)))
      )
    )
  )


}
