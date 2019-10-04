import * as fromActions from './sport.actions';
import { Sport } from 'src/app/sport';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const sportFeatureKey = 'sport';

export interface State {
  sport: SportState;
}

export const sportAdapter: EntityAdapter<
  Sport
> = createEntityAdapter<Sport>({});

export interface SportState
  extends EntityState<Sport> {
    currentSportID: number;
    loaded: boolean;
    loading: boolean;
    error: string;
}

export const initialState: SportState = sportAdapter.getInitialState(
  {
    currentSportID: 0,
    loaded: true,
    loading: false,
    error: '',
  }
);


export function reducer(state = initialState, action: fromActions.SportUnion): SportState {
  switch (action.type) {

    case fromActions.LoadSports.type:
      return { ...state, loaded: false, loading: true };

    default:
      return state;
  }
}
