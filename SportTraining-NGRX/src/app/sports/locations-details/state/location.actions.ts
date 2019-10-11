import { createAction, union } from '@ngrx/store';
import { Program } from 'src/app/location';


export const LoadLocations  = createAction(
  '[Location] Load Locations',
  (payload: { }) => ({ payload })
);

export const LoadLocationSuccess  = createAction(
  '[Location] Load Location Success',
  (payload: { location: Program[] }) => ({ payload })
);

export const LoadLocationFail = createAction(
  '[Location] Load Location Fail',
  (payload: { error: string }) => ({ payload })
);

export const UpdateLocations  = createAction(
  '[Location] Update Locations',
  (payload: { location: Program }) => ({ payload })
);

export const UpdateLocationSuccess  = createAction(
  '[Location] Update Location Success',
  (payload: { }) => ({ payload })
);

export const UpdateLocationFail = createAction(
  '[Location] Update Location Fail',
  (payload: { error: string }) => ({ payload })
);

export const SetCurrentLocation = createAction(
  '[Location] Set Current Location',
  (payload: { id: number }) => ({ payload })
);

export const SetCurrentSport = createAction(
  '[Location] Set Current Sport',
  (payload: { id: number }) => ({ payload })
);

const LocationActions = union({
  LoadLocations,
  LoadLocationSuccess,
  LoadLocationFail,
  UpdateLocations,
  UpdateLocationSuccess,
  UpdateLocationFail,
  SetCurrentLocation,
  SetCurrentSport,
});

export type LocationUnion = typeof LocationActions;

