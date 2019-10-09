import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { exhaustMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as fromActions from './location.actions';
import { LocationService } from '../../service/location.service';
import { Action } from '@ngrx/store';
import { Program } from 'src/app/location';


@Injectable()
export class LocationEffects {

  constructor(private locationService: LocationService, private actions$: Actions) {}

  @Effect()
  loadLocations$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LoadLocations.type),
    exhaustMap((LocationsActions: any) =>
      this.locationService
        .getLocations()
        .pipe(
          map((entities: Program[]) =>
            fromActions.LoadLocationSuccess({
              locations: entities,
            })
          ),
          catchError(({ message }) =>
            of(
              fromActions.UpdateLocationFail({
                error: message,
              })
            )
          )
        )
    )
  );

  @Effect()
  updateLocations$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.UpdateLocations.type),
    exhaustMap((locationActions: any) =>
      this.locationService
        .updateLocation(locationActions.payload.location)
        .pipe(
          map((entities: Program) =>
            fromActions.UpdateLocationSuccess({
              Locations: entities,
            })
          ),
          catchError(({ message }) =>
            of(
              fromActions.UpdateLocationFail({
                error: message,
              })
            )
          )
        )
    )
  );

 
}
