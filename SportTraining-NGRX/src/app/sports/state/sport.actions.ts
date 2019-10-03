import { Action, createAction, union } from '@ngrx/store';
import { Sport } from 'src/app/sport';

// export enum SportActionTypes {
//   LoadSports = '[Sport] Load Sports',
//   LoadSportSuccess = '[Sport] Load Sport Success',
//   LoadSportFail = '[Sport] Load Sport Fail',
//   UpdateSport = '[Sport] Update Sport',
//   UpdateSportSuccess = '[Sport] Update Sport Success',
//   UpdateSportFail = '[Sport] Update Sport Fail',
//   GetSport = '[Sport] Get Sport',
//   GetSportSuccess = '[Sport] Get Sport Success',
//   GetSportFail = '[Sport] Get Sport Fail',
// }

export const LoadSports  = createAction(
  '[Sport] Load Sports',
  (payload: { }) => ({ payload })
);

export const LoadSportSuccess  = createAction(
  '[Sport] Load Sport Success',
  (payload: { sport: Sport[] }) => ({ payload })
);

export const LoadSportFail = createAction(
  '[Sport] Load Sport Fail',
  (payload: { error: string }) => ({ payload })
);

// export class LoadSports implements Action {
//   readonly type = SportActionTypes.LoadSports;
// }

// export class LoadSportSuccess implements Action {
//   readonly type = SportActionTypes.LoadSportSuccess;

//   constructor(public payload: Sport[]) {}
// }

// export class LoadSportFail implements Action {
//   readonly type = SportActionTypes.LoadSportFail;

//   constructor(public payload: string) {}
// }

// export class UpdateSport implements Action {
//   readonly type = SportActionTypes.UpdateSport;

//   constructor(public payload: Sport) {}
// }

// export class UpdateSportSuccess implements Action {
//   readonly type = SportActionTypes.UpdateSportSuccess;

// }

// export class UpdateSportFail implements Action {
//   readonly type = SportActionTypes.UpdateSportFail;

//   constructor(public payload: string) {}
// }
// export class GetSport implements Action {
//   readonly type = SportActionTypes.GetSport;

//   constructor(public payload: number) {}
// }

// export class GetSportSuccess implements Action {
//   readonly type = SportActionTypes.GetSportSuccess;

//   constructor(public payload: Sport) {}
// }

// export class GetSportFail implements Action {
//   readonly type = SportActionTypes.GetSportFail;

//   constructor(public payload: string) {}
// }


// export type SportActions = LoadSports
// | LoadSportSuccess
// | LoadSportFail
// | UpdateSport
// | UpdateSportSuccess
// | UpdateSportFail
// | GetSport
// | GetSportSuccess
// | GetSportFail;

const SportActions = union({
  LoadSports,
  LoadSportSuccess,
  LoadSportFail,
})

export type SportUnion = typeof SportActions;
