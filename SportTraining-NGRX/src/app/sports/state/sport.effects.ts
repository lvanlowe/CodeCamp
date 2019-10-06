import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { map, mergeMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as sportActions from './sport.actions';
import { Action } from '@ngrx/store';
import { SportService } from '../service/sport.service';
import { Sport } from 'src/app/sport';




@Injectable()
export class SportEffects {

  constructor(private sportService: SportService, private actions$: Actions) {}

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
  );

  @Effect()
  updateSports$: Observable<Action> = this.actions$.pipe(
    ofType(sportActions.SportActionTypes.UpdateSport),
    map((action: sportActions.UpdateSport) => action.payload),
    mergeMap((sport: Sport) =>
      this.sportService.updateSport(sport).pipe(
        map(sports => new sportActions.UpdateSportSuccess()),
        catchError(err => of(new sportActions.UpdateSportFail(err)))
      )
    )
  );

}
