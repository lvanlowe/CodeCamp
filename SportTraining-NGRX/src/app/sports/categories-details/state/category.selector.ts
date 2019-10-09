import * as fromCategoryState from './category.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getCategoryState = createFeatureSelector<
fromCategoryState.CategoryState
>('category');

export const getCategoryLoadingIndicator = createSelector(
  getCategoryState,
  fromCategoryState.getLoading
);

export const getCategoryLoadedIndicator = createSelector(
  getCategoryState,
  fromCategoryState.getLoaded
);

export const getCategoryCurrentid = createSelector(
  getCategoryState,
  fromCategoryState.getCurrentid
);

export const selectAllCategories = createSelector(getCategoryState, fromCategoryState.selectAllCategory);

export const selectCategoryEntities = createSelector(getCategoryState, fromCategoryState.selectCategoryEntities);

export const selectCategory = createSelector(
  getCategoryCurrentid,
  selectCategoryEntities,
  (id, CategoryEntities) => CategoryEntities[id]
);


