import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { CategoryActionTypes, CategoryActions } from './category.actions';



@Injectable()
export class CategoryEffects {


  @Effect()
  loadCategorys$ = this.actions$.pipe(
    ofType(CategoryActionTypes.LoadCategorys),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<CategoryActions>) {}

}
