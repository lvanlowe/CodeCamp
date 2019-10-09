import { Action } from '@ngrx/store';
import { Category } from 'src/app/category';

export enum CategoryActionTypes {
  LoadCategories = '[Category] Load Categories',
  LoadCategorySuccess = '[Category] Load Category Success',
  LoadCategoryFail = '[Category] Load Category Fail',
  UpdateCategory = '[Category] Update Category',
  UpdateCategorySuccess = '[Category] Update Category Success',
  UpdateCategoryFail = '[Category] Update Category Fail',
  GetCategory = '[Category] Get Category',
  GetCategorySuccess = '[Category] Get Category Success',
  GetCategoryFail = '[Category] Get Category Fail',
}

export class LoadCategories implements Action {
  readonly type = CategoryActionTypes.LoadCategories;

  constructor(public payload: number) {}
}

export class LoadCategorySuccess implements Action {
  readonly type = CategoryActionTypes.LoadCategorySuccess;

  constructor(public payload: Category[]) {}
}

export class LoadCategoryFail implements Action {
  readonly type = CategoryActionTypes.LoadCategoryFail;

  constructor(public payload: string) {}
}

export class UpdateCategory implements Action {
  readonly type = CategoryActionTypes.UpdateCategory;

  constructor(public payload: Category) {}
}

export class UpdateCategorySuccess implements Action {
  readonly type = CategoryActionTypes.UpdateCategorySuccess;

}

export class UpdateCategoryFail implements Action {
  readonly type = CategoryActionTypes.UpdateCategoryFail;

  constructor(public payload: string) {}
}
export class GetCategory implements Action {
  readonly type = CategoryActionTypes.GetCategory;

  constructor(public payload: number) {}
}

export class GetCategorySuccess implements Action {
  readonly type = CategoryActionTypes.GetCategorySuccess;

  constructor(public payload: Category) {}
}

export class GetCategoryFail implements Action {
  readonly type = CategoryActionTypes.GetCategoryFail;

  constructor(public payload: string) {}
}


export type CategoryActions = LoadCategories
| LoadCategorySuccess
| LoadCategoryFail
| UpdateCategory
| UpdateCategorySuccess
| UpdateCategoryFail
| GetCategory
| GetCategorySuccess
| GetCategoryFail;
