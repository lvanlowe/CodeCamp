import { createAction, union } from '@ngrx/store';
import { Category } from 'src/app/category';


export const LoadCategories  = createAction(
  '[Category] Load Categories',
  (payload: { }) => ({ payload })
);

export const LoadCategorySuccess  = createAction(
  '[Category] Load Category Success',
  (payload: { category: Category[] }) => ({ payload })
);

export const LoadCategoryFail = createAction(
  '[Category] Load Category Fail',
  (payload: { error: string }) => ({ payload })
);

export const UpdateCategories  = createAction(
  '[Category] Update Categories',
  (payload: { category: Category }) => ({ payload })
);

export const UpdateCategorySuccess  = createAction(
  '[Category] Update Category Success',
  (payload: { }) => ({ payload })
);

export const UpdateCategoryFail = createAction(
  '[Category] Update Category Fail',
  (payload: { error: string }) => ({ payload })
);

export const SetCurrentCategory = createAction(
  '[Category] Set Current Category',
  (payload: { id: number }) => ({ payload })
);

export const SetCurrentSport = createAction(
  '[Category] Set Current Sport',
  (payload: { id: number }) => ({ payload })
);

const CategoryActions = union({
  LoadCategories,
  LoadCategorySuccess,
  LoadCategoryFail,
  UpdateCategories,
  UpdateCategorySuccess,
  UpdateCategoryFail,
  SetCurrentCategory,
  SetCurrentSport,
});

export type CategoryUnion = typeof CategoryActions;

