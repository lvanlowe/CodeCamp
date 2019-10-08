import { createAction, union } from '@ngrx/store';
import { Sport } from 'src/app/sport';


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

export const UpdateSports  = createAction(
  '[Sport] Update Sports',
  (payload: { sport: Sport }) => ({ payload })
);

export const UpdateSportSuccess  = createAction(
  '[Sport] Update Sport Success',
  (payload: { }) => ({ payload })
);

export const UpdateSportFail = createAction(
  '[Sport] Update Sport Fail',
  (payload: { error: string }) => ({ payload })
);


const SportActions = union({
  LoadSports,
  LoadSportSuccess,
  LoadSportFail,
  UpdateSports,
  UpdateSportSuccess,
  UpdateSportFail,
});

export type SportUnion = typeof SportActions;
