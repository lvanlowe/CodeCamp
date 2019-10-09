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
    currentid: number;
    loaded: boolean;
    loading: boolean;
    error: string;
}

export const initialState: SportState = sportAdapter.getInitialState(
  {
    currentid: 0,
    loaded: false,
    loading: false,
    error: '',
  }
);


export const {
  selectIds: selectSportIds,
  selectEntities: selectSportEntities,
  selectAll: selectAllSport,
  selectTotal: sportsCount
} = sportAdapter.getSelectors();

export function reducer(state = initialState, action: fromActions.SportUnion): SportState {
  switch (action.type) {

    case fromActions.LoadSports.type:
      return { ...state, loaded: false, loading: true };
    case fromActions.LoadSportSuccess.type:
        return {
          ...sportAdapter.addAll(
            action.payload.sport,
            state
          ),
            loaded: true,
            loading: false,
            error: '',
        };
    case fromActions.UpdateSports.type:
        return {
          ...sportAdapter.upsertOne(
          action.payload.sport,
          state
        ),
         loaded: false, loading: true };
    case fromActions.UpdateSportSuccess.type:
        return {
                ...state,
                loaded: true,
                loading: false,
              };
              case fromActions.SetCurrentSport.type:
                return {
                  ...state,
                 currentid: action.payload.id};
    default:
      return state;
  }

}

export const getLoading = (
  state: SportState
) => (state ? state.loading : null);

export const getLoaded = (
  state: SportState
) => (state ? state.loaded : null);

export const getCurrentid = (
  state: SportState
) => (state ? state.currentid : null);
