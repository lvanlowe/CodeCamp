import * as fromRoot from '../../state/sport.reducer';
import { CategoryActions, CategoryActionTypes } from './category.actions';
import { Category } from 'src/app/category';


export interface State extends fromRoot.State {
  category: CategoryState;
}

export const categoryFeatureKey = 'category';

export interface CategoryState {
  currentCategoryid: number;
  categories: Category[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: CategoryState = {
  currentCategoryid: 0,
  categories: [],
  loaded: false,
  loading: false,
  error: '',
};

export function reducer(state = initialState, action: CategoryActions): CategoryState {
  let updatedCategories: Category[];
  switch (action.type) {

    case CategoryActionTypes.LoadCategories:
      return { ...state, loaded: false, loading: true };

    case CategoryActionTypes.LoadCategorySuccess:
      return {
          ...state,
          loaded: true,
          loading: false,
          categories: action.payload,
          error: '',
      };

    case CategoryActionTypes.GetCategory:
      return { ...state, currentCategoryid: action.payload };

    case CategoryActionTypes.GetCategorySuccess:
        const CategoryRecord = action.payload;
        if (state.categories.find(p => p.id === CategoryRecord.id)) {
            updatedCategories = state.categories.map(item =>
            action.payload.id === item.id ? CategoryRecord : item
          );
          }
        return {
          ...state,
          categories: updatedCategories,
          loaded: true,
          loading: false,
          currentCategoryid: action.payload.id,
        };

        case CategoryActionTypes.UpdateCategory:
          updatedCategories = state.categories.map(item =>
            action.payload.id === item.id ? action.payload : item
          );
          return { ...state, categories: updatedCategories, loaded: false, loading: true };

          case CategoryActionTypes.UpdateCategorySuccess:
            return {
              ...state,
              loaded: true,
              loading: false,
            };
    default:
      return state;
  }
}
