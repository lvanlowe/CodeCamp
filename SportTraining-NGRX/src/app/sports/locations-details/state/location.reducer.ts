import * as fromRoot from '../../state/sport.reducer';
import * as fromActions from './location.actions';
import { Program } from 'src/app/location';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface State extends fromRoot.State {
  location: LocationState;
}
export const locationFeatureKey = 'location';

export const locationAdapter: EntityAdapter<
  Program
> = createEntityAdapter<Program>({});

export interface LocationState
  extends EntityState<Program> {
    currentid: number;
    loaded: boolean;
    loading: boolean;
    error: string;
}

export const initialState: LocationState = locationAdapter.getInitialState(
  {
    currentid: 0,
    loaded: false,
    loading: false,
    error: '',
  }
);


export const {
  selectIds: selectLocationIds,
  selectEntities: selectLocationEntities,
  selectAll: selectAllLocation,
  selectTotal: locationsCount
} = locationAdapter.getSelectors();

export function reducer(state = initialState, action: fromActions.LocationUnion): LocationState {
  switch (action.type) {

    case fromActions.LoadLocations.type:
      return { ...state, loaded: false, loading: true };
    case fromActions.LoadLocationSuccess.type:
        return {
          ...locationAdapter.addAll(
            action.payload.location,
            state
          ),
            loaded: true,
            loading: false,
            error: '',
        };
    case fromActions.UpdateLocations.type:
        return {
          ...locationAdapter.upsertOne(
          action.payload.location,
          state
        ),
         loaded: false, loading: true };
    case fromActions.UpdateLocationSuccess.type:
        return {
                ...state,
                loaded: true,
                loading: false,
              };
              case fromActions.SetCurrentLocation.type:
                return {
                  ...state,
                 currentid: action.payload.id};
    default:
      return state;
  }

}

export const getLoading = (
  state: LocationState
) => (state ? state.loading : null);

export const getLoaded = (
  state: LocationState
) => (state ? state.loaded : null);

export const getCurrentid = (
  state: LocationState
) => (state ? state.currentid : null);

