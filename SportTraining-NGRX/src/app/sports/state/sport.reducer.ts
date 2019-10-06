
import { SportActions, SportActionTypes } from './sport.actions';
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
  loaded: false,
  loading: false,
  error: '',
};

export function reducer(state = initialState, action: SportActions): SportState {
  switch (action.type) {

    case SportActionTypes.LoadSports:
      return { ...state, loaded: false, loading: true };

    case SportActionTypes.LoadSportSuccess:
      return {
          ...state,
          loaded: true,
          loading: false,
          sports: action.payload,
          error: '',
      };

    case SportActionTypes.GetSport:
      return { ...state, currentSportID: action.payload };

    case SportActionTypes.GetSportSuccess:
        const sportRecord = action.payload;
        let updatedAwards: Sport[];
        if (state.sports.find(p => p.id === sportRecord.id)) {
            updatedAwards = state.sports.map(item =>
            action.payload.id === item.id ? sportRecord : item
          );
          }
        return {
          ...state,
          sports: updatedAwards,
          loaded: true,
          loading: false,
          currentSportID: action.payload.id,
        };
    default:
      return state;
  }
}
