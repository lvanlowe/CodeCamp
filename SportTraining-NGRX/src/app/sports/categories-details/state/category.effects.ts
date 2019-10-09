import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { map, exhaustMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as fromActions from './category.actions';
import { Category } from 'src/app/category';
import { CategoryService } from '../../service/category.service';
import { Action } from '@ngrx/store';


@Injectable()
export class CategoryEffects {

  constructor(private categoryService: CategoryService, private actions$: Actions) {}


  @Effect()
  loadCategory$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LoadCategories.type),
    exhaustMap((categoryActions: any) =>
      this.categoryService
        .getCategories()
        .pipe(
          map((entities: Category[]) =>
            fromActions.LoadCategorySuccess({
              category: entities,
            })
          ),
          catchError(({ message }) =>
            of(
              fromActions.UpdateCategoryFail({
                error: message,
              })
            )
          )
        )
    )
  );

  @Effect()
  updateCategory$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.UpdateCategories.type),
    exhaustMap((categoryActions: any) =>
      this.categoryService
        .updateCategory(categoryActions.payload.category)
        .pipe(
          map((entities: Category) =>
            fromActions.UpdateCategorySuccess({
              category: entities,
            })
          ),
          catchError(({ message }) =>
            of(
              fromActions.UpdateCategoryFail({
                error: message,
              })
            )
          )
        )
    )
  );

}
