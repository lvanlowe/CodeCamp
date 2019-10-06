import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { LocationActionTypes, LocationActions } from './location.actions';



@Injectable()
export class LocationEffects {


  @Effect()
  loadLocations$ = this.actions$.pipe(
    ofType(LocationActionTypes.LoadLocations),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<LocationActions>) {}

}
