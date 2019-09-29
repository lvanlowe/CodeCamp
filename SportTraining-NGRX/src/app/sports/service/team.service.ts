import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/message.service';
import { HttpClient } from '@angular/common/http';
import { Team } from 'src/app/team';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private messageService: MessageService,
    private http: HttpClient) { }

    getTeams(): Observable<Team[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add('TeamService: fetched teams');
      return this.http.get<Team[]>('/api/teams');
    }

    getTeamsByLocation(locationid: number): Observable<Team[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add(`TeamService: fetched teams locationid=${locationid}`);
      return this.http.get<Team[]>(`/api/teams?locationid=${locationid}`);
    }

    getTeamsByCategory(categoryid: number): Observable<Team[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add(`TeamService: fetched teams categoryid=${categoryid}`);
      return this.http.get<Team[]>(`/api/teams?categoryid=${categoryid}`);
    }

    getTeam(id: number): Observable<Team> {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`TeamService: fetched team id=${id}`);
      return this.http.get<Team>(`/api/teams/${id}`);
    }

    updateTeam(team: Team) {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`TeamService: update team id=${team.id}`);
      return this.http.put(`/api/teams/${team.id}`, team);
    }
}
