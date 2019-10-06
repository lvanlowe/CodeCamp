import { Action } from '@ngrx/store';
import { Program } from 'src/app/location';

export enum LocationActionTypes {
  LoadLocations = '[Location] Load Locations',
  LoadLocationSuccess = '[Location] Load Location Success',
  LoadLocationFail = '[Location] Load Location Fail',
  UpdateLocation = '[Location] Update Location',
  UpdateLocationSuccess = '[Location] Update Location Success',
  UpdateLocationFail = '[Location] Update Location Fail',
  GetLocation = '[Location] Get Location',
  GetLocationSuccess = '[Location] Get Location Success',
  GetLocationFail = '[Location] Get Location Fail',
}

export class LoadLocations implements Action {
  readonly type = LocationActionTypes.LoadLocations;

  constructor(public payload: number) {}
}

export class LoadLocationSuccess implements Action {
  readonly type = LocationActionTypes.LoadLocationSuccess;

  constructor(public payload: Program[]) {}
}

export class LoadLocationFail implements Action {
  readonly type = LocationActionTypes.LoadLocationFail;

  constructor(public payload: string) {}
}

export class UpdateLocation implements Action {
  readonly type = LocationActionTypes.UpdateLocation;

  constructor(public payload: Program) {}
}

export class UpdateLocationSuccess implements Action {
  readonly type = LocationActionTypes.UpdateLocationSuccess;

}

export class UpdateLocationFail implements Action {
  readonly type = LocationActionTypes.UpdateLocationFail;

  constructor(public payload: string) {}
}
export class GetLocation implements Action {
  readonly type = LocationActionTypes.GetLocation;

  constructor(public payload: number) {}
}

export class GetLocationSuccess implements Action {
  readonly type = LocationActionTypes.GetLocationSuccess;

  constructor(public payload: Program) {}
}

export class GetLocationFail implements Action {
  readonly type = LocationActionTypes.GetLocationFail;

  constructor(public payload: string) {}
}


export type LocationActions = LoadLocations
| LoadLocationSuccess
| LoadLocationFail
| UpdateLocation
| UpdateLocationSuccess
| UpdateLocationFail
| GetLocation
| GetLocationSuccess
| GetLocationFail;
