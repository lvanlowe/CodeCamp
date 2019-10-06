import { Action } from '@ngrx/store';

export enum LocationActionTypes {
  LoadLocations = '[Location] Load Locations',
  
  
}

export class LoadLocations implements Action {
  readonly type = LocationActionTypes.LoadLocations;
}


export type LocationActions = LoadLocations;
