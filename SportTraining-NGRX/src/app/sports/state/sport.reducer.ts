import * as fromActions from './sport.actions';
import { Sport } from 'src/app/sport';

export const sportFeatureKey = 'sport';

export interface State {
  sport: SportState;
}

export interface SportState {
  currentSportID: number;
  sports: Sport[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: SportState = {
  currentSportID: 0,
  sports: [],
  loaded: true,
  loading: false,
  error: '',
};

export function reducer(state = initialState, action: fromActions.SportUnion): SportState {
  switch (action.type) {

    case fromActions.LoadSports.type:
      console.warn('reducer');
      return { ...state, loaded: false, loading: true };

    default:
      return state;
  }
}
