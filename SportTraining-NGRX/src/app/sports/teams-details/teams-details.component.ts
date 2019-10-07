import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/team';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TeamService } from '../service/team.service';
import * as fromTeam from './state/team.reducer';
// import * as categorySelector from './state/category.selector';
// import * as categoryActions from './state/category.actions';
import * as teamSelector from '../teams-details/state/team.selector';
import * as teamActions from '../teams-details/state/team.actions';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-teams-details',
  templateUrl: './teams-details.component.html',
  styleUrls: ['./teams-details.component.scss']
})
export class TeamsDetailsComponent implements OnInit {

  team: Team;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromTeam.State>,
    private teamService: TeamService,
    private location: Location
  ) {}

  ngOnInit() {
    const teamid = this.getTeam();
  }

  getTeam(): number {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new teamActions.GetTeam(id));
    this.teamService.getTeam(id).subscribe(team => (this.team = team));
    return id;
  }

  updateTeams(): void {
    this.store.dispatch(new teamActions.UpdateTeam(this.team));
    // this.teamService.updateTeam(this.team);
  }

  goBack(): void {
    this.location.back();
  }
}
