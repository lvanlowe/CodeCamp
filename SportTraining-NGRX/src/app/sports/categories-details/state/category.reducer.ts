import * as fromRoot from '../../state/sport.reducer';
import * as fromActions from './category.actions';
import { Category } from 'src/app/category';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';


export interface State extends fromRoot.State {
  category: CategoryState;
}

export const categoryFeatureKey = 'category';


export const categoryAdapter: EntityAdapter<
  Category
> = createEntityAdapter<Category>({});

export interface CategoryState
  extends EntityState<Category> {
    currentid: number;
    currentSportid: number;
    loaded: boolean;
    loading: boolean;
    error: string;
}

export const initialState: CategoryState = categoryAdapter.getInitialState(
  {
    currentid: 0,
    currentSportid: 0,
    loaded: false,
    loading: false,
    error: '',
  }
);


export const {
  selectIds: selectCategoryIds,
  selectEntities: selectCategoryEntities,
  selectAll: selectAllCategory,
  selectTotal: categoriesCount
} = categoryAdapter.getSelectors();

export function reducer(state = initialState, action: fromActions.CategoryUnion): CategoryState {
  switch (action.type) {

    case fromActions.SetCurrentSport.type:
      return { ...state, currentSportid: action.payload.id };
    case fromActions.LoadCategories.type:
      return { ...state, loaded: false, loading: true };
    case fromActions.LoadCategorySuccess.type:
        return {
          ...categoryAdapter.addAll(
            action.payload.category,
            state
          ),
            loaded: true,
            loading: false,
            error: '',
        };
    case fromActions.UpdateCategories.type:
        return {
          ...categoryAdapter.upsertOne(
          action.payload.category,
          state
        ),
         loaded: false, loading: true };
    case fromActions.UpdateCategorySuccess.type:
        return {
                ...state,
                loaded: true,
                loading: false,
              };
              case fromActions.SetCurrentCategory.type:
                return {
                  ...state,
                 currentid: action.payload.id};
    default:
      return state;
  }

}

export const getLoading = (
  state: CategoryState
) => (state ? state.loading : null);

export const getLoaded = (
  state: CategoryState
) => (state ? state.loaded : null);

export const getCurrentid = (
  state: CategoryState
) => (state ? state.currentid : null);

export const getCurrentSport = (
  state: CategoryState
) => (state ? state.currentSportid : null);

