import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { map, mergeMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as categoryActions from './category.actions';
import { Category } from 'src/app/category';
import { CategoryService } from '../../service/category.service';
import { Action } from '@ngrx/store';


@Injectable()
export class CategoryEffects {

  constructor(private categoryService: CategoryService, private actions$: Actions) {}

  @Effect()
  loadCategoriesBySport$: Observable<Action> = this.actions$.pipe(
    ofType(categoryActions.CategoryActionTypes.LoadCategories),
    map((action: categoryActions.LoadCategories) => action.payload),
    mergeMap((sportid: number) =>
      this.categoryService.getCategoriesBySport(sportid).pipe(
        map(Categorys => new categoryActions.LoadCategorySuccess(Categorys)),
        catchError(err => of(new categoryActions.LoadCategoryFail(err)))
      )
    )
  );

  @Effect()
  updateCategorys$: Observable<Action> = this.actions$.pipe(
    ofType(categoryActions.CategoryActionTypes.UpdateCategory),
    map((action: categoryActions.UpdateCategory) => action.payload),
    mergeMap((category: Category) =>
      this.categoryService.updateCategory(category).pipe(
        map(categories => new categoryActions.UpdateCategorySuccess()),
        catchError(err => of(new categoryActions.UpdateCategoryFail(err)))
      )
    )
  );

}
