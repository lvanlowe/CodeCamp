import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/team';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TeamService } from '../service/team.service';

@Component({
  selector: 'app-teams-details',
  templateUrl: './teams-details.component.html',
  styleUrls: ['./teams-details.component.scss']
})
export class TeamsDetailsComponent implements OnInit {

  team: Team;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) {}

  ngOnInit() {
    const teamid = this.getTeam();
  }

  getTeam(): number {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getTeam(id).subscribe(team => (this.team = team));
    return id;
  }

  updateTeams(): void {
    this.teamService.updateTeam(this.team);
  }

  goBack(): void {
    this.location.back();
  }
}
