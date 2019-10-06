
import { CategoryActions, CategoryActionTypes } from './category.actions';

export const categoryFeatureKey = 'category';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: CategoryActions): State {
  switch (action.type) {

    case CategoryActionTypes.LoadCategorys:
      return state;

    default:
      return state;
  }
}
