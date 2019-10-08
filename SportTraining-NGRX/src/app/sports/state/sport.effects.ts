import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {  map, catchError, exhaustMap } from 'rxjs/operators';
import {  Observable, of } from 'rxjs';

import * as fromActions from './sport.actions';
import { SportService } from '../service/sport.service';
import { Action } from '@ngrx/store';
import { Sport } from 'src/app/sport';


@Injectable()
export class SportEffects {

  constructor(private sportService: SportService, private actions$: Actions) {}


  @Effect()
  loadSport$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LoadSports.type),
    exhaustMap((sportActions: any) =>
      this.sportService
        .getSports()
        .pipe(
          map((entities: Sport[]) =>
            fromActions.LoadSportSuccess({
              sport: entities,
            })
          ),
          catchError(({ message }) =>
            of(
              fromActions.UpdateSportFail({
                error: message,
              })
            )
          )
        )
    )
  );

  @Effect()
  updateSport$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.UpdateSports.type),
    exhaustMap((sportActions: any) =>
      this.sportService
        .updateSport(sportActions.payload.sport)
        .pipe(
          map((entities: Sport) =>
            fromActions.UpdateSportSuccess({
              sport: entities,
            })
          ),
          catchError(({ message }) =>
            of(
              fromActions.UpdateSportFail({
                error: message,
              })
            )
          )
        )
    )
  );
}
