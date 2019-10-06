import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as locationActions from './location.actions';
import { LocationService } from '../../service/location.service';
import { Action } from '@ngrx/store';
import { Program } from 'src/app/location';


@Injectable()
export class LocationEffects {

  constructor(private locationService: LocationService, private actions$: Actions) {}

  @Effect()
  loadLocationsBySport$: Observable<Action> = this.actions$.pipe(
    ofType(locationActions.LocationActionTypes.LoadLocations),
    map((action: locationActions.LoadLocations) => action.payload),
    mergeMap((sportid: number) =>
      this.locationService.getLocationsBySport(sportid).pipe(
        map(locations => new locationActions.LoadLocationSuccess(locations)),
        catchError(err => of(new locationActions.LoadLocationFail(err)))
      )
    )
  );

  @Effect()
  updateLocations$: Observable<Action> = this.actions$.pipe(
    ofType(locationActions.LocationActionTypes.UpdateLocation),
    map((action: locationActions.UpdateLocation) => action.payload),
    mergeMap((location: Program) =>
      this.locationService.updateLocation(location).pipe(
        map(locations => new locationActions.UpdateLocationSuccess()),
        catchError(err => of(new locationActions.UpdateLocationFail(err)))
      )
    )
  );
}
