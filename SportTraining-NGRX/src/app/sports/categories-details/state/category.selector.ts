import { CategoryState } from './category.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

const getCategoriesFeatureState = createFeatureSelector<CategoryState>('Category');

export const getCategories = createSelector(
  getCategoriesFeatureState,
  state => (state ? state.categories : null)
);

export const getCurrentCategoryId = createSelector(
  getCategoriesFeatureState,
  state => (state ? state.currentCategoryid : null)
);

export const getCategory = createSelector(
  getCategoriesFeatureState,
  getCurrentCategoryId,
  (state, currentCategoryid) => {
    if (currentCategoryid === null) {
      return null;
    }
    return state ? state.categories.find(s => s.id === currentCategoryid) : null;
  }
);

export const getCategoryLoadingIndicator = createSelector(
  getCategoriesFeatureState,
  state => (state ? state.loading : null)
);

export const getCategoryLoadedIndicator = createSelector(
  getCategoriesFeatureState,
  state => (state ? state.loaded : null)
);
