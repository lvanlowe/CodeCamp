import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
// import { SportActionTypes, SportActions } from './sport.actions';
import * as fromActions from './sport.actions';


@Injectable()
export class SportEffects {


  // @Effect()
  // loadSports$ = this.actions$.pipe(
  //   ofType(fromActions.LoadSports.type),
  //   /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //   concatMap(() => EMPTY)
  // );


  // constructor(private actions$: Actions<SportActions>) {}

}
