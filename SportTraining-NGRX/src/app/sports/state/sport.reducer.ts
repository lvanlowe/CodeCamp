
import { SportActions, SportActionTypes } from './sport.actions';
import { Sport } from 'src/app/sport';

export const sportFeatureKey = 'sport';

export interface State {
  sport: SportState;
}

export interface SportState {
  currentSportid: number;
  sports: Sport[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: SportState = {
  currentSportid: 0,
  sports: [],
  loaded: false,
  loading: false,
  error: '',
};

export function reducer(state = initialState, action: SportActions): SportState {

  let updatedSports: Sport[];
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
      return { ...state, currentSportid: action.payload };

    case SportActionTypes.GetSportSuccess:
        const sportRecord = action.payload;
        if (state.sports.find(p => p.id === sportRecord.id)) {
            updatedSports = state.sports.map(item =>
            action.payload.id === item.id ? sportRecord : item
          );
          }
        return {
          ...state,
          sports: updatedSports,
          loaded: true,
          loading: false,
          currentSportid: action.payload.id,
        };

        case SportActionTypes.UpdateSport:
          updatedSports = state.sports.map(item =>
            action.payload.id === item.id ? action.payload : item
          );
          return { ...state, sports: updatedSports, loaded: false, loading: true };

          case SportActionTypes.UpdateSportSuccess:
            return {
              ...state,
              loaded: true,
              loading: false,
            };
    default:
      return state;
  }
}
