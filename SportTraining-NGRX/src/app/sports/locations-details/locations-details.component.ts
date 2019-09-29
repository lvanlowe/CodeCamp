import { Component, OnInit } from '@angular/core';
import { Program } from 'src/app/location';
import { Team } from 'src/app/team';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LocationService } from '../service/location.service';
import { TeamService } from '../service/team.service';

@Component({
  selector: 'app-locations-details',
  templateUrl: './locations-details.component.html',
  styleUrls: ['./locations-details.component.scss']
})
export class LocationsDetailsComponent implements OnInit {

  place: Program;
  teams: Team[];

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    private teamService: TeamService,
    private location: Location
  ) {}

  ngOnInit() {
    const locationid = this.getLocation();
    this.getTeams(locationid);
  }

  getLocation(): number {
    const id = +this.route.snapshot.paramMap.get('id');
    this.locationService.getLocation(id).subscribe(location => (this.place = location));
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
