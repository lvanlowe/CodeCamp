import { Action } from '@ngrx/store';

export enum SportActionTypes {
  LoadSports = '[Sport] Load Sports',
  
  
}

export class LoadSports implements Action {
  readonly type = SportActionTypes.LoadSports;
}


export type SportActions = LoadSports;
