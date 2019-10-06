import { Component, OnInit } from '@angular/core';
import { Program } from 'src/app/location';
import { Team } from 'src/app/team';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LocationService } from '../service/location.service';
import { TeamService } from '../service/team.service';
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
    private locationService: LocationService,
    private teamService: TeamService,
    private location: Location
  ) {}

  ngOnInit() {
    const locationid = this.getLocation();

    this.store.pipe(select(teamSelector.getTeamLoadingIndicator)).subscribe(loading => {
      this.isTeamLoading = loading;
      if (!this.isTeamLoading) {
        const location$ = this.store.pipe(select(teamSelector.getTeams));
        location$.subscribe(results => {
          this.teams = results;
        });
      }
    });
    // this.getTeams(locationid);
  }

  getLocation(): number {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new locationActions.GetLocation(id));
    // this.sportService.getSport(id).subscribe(sport => (this.sport = sport));
    const locationDetail$ = this.store.pipe(select(locationSelector.getLocation));
    locationDetail$.subscribe(results => {
      this.place = Object.assign({}, results);
    });
    this.store.dispatch(new teamActions.LoadTeamsLocation(id));
    // this.locationService.getLocation(id).subscribe(location => (this.place = location));
    return id;
  }

  getTeams(locationid: number): void {
    this.teamService.getTeamsByLocation(locationid).subscribe(teams => (this.teams = teams));
  }

  updateLocation(): void {
    this.locationService.updateLocation(this.place);
  }

  goBack(): void {
    this.location.back();
  }
}
