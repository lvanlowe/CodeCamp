import { Component, OnInit } from '@angular/core';
import { Program } from 'src/app/location';
import { Team } from 'src/app/team';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store, select } from '@ngrx/store';
import * as fromLocation from '../locations-details/state/location.reducer';
import * as locationSelector from '../locations-details/state/location.selector';
import * as locationActions from '../locations-details/state/location.actions';
import * as teamSelector from '../teams-details/state/team.selector';
import * as teamActions from '../teams-details/state/team.actions';

@Component({
  selector: 'app-locations-details',
  templateUrl: './locations-details.component.html',
  styleUrls: ['./locations-details.component.scss']
})
export class LocationsDetailsComponent implements OnInit {

  place: Program;
  teams: Team[];
  isTeamLoading: boolean;
  isTeamLoaded: boolean;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromLocation.State>,
    private location: Location
  ) {}

  ngOnInit() {
    const locationid = this.getLocation();
    this.getTeams(locationid);

  }

  getLocation(): number {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(locationActions.SetCurrentLocation({id: id}));
    const locationDetail$ = this.store.pipe(select(locationSelector.selectLocation));
    locationDetail$.subscribe(results => {
      this.place = Object.assign({}, results);
    });
    // this.store.dispatch(new teamActions.LoadTeamsLocation(id));
    return id;
  }

    getTeams(locationid: number): void {
      this.store.dispatch(teamActions.SetCurrentLocation({id: locationid}));
      const teamLoaded$ = this.store.pipe(select(teamSelector.getTeamLoadedIndicator));
      teamLoaded$.subscribe(results => {
        this.isTeamLoaded = results;
      });
      if (!this.isTeamLoaded) {
        this.store.dispatch(
          teamActions.LoadTeams({}));
      }
      this.store.pipe(select(teamSelector.getTeamLoadingIndicator)).subscribe(loading => {
        this.isTeamLoading = loading;
        if (!this.isTeamLoading) {
          const team$ = this.store.pipe(select(teamSelector.selectTeamsByLocation));
          team$.subscribe(results => {
            this.teams = results;
          });
        }
      });
    }

  updateLocation(): void {
    this.store.dispatch(locationActions.UpdateLocations({location: this.place}));
  }

  goBack(): void {
    this.location.back();
  }
}
