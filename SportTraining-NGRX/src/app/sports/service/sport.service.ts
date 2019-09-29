import { Injectable } from '@angular/core';
import { MessageService } from '../../message.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sport } from '../../sport';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  constructor(private messageService: MessageService,
    private http: HttpClient) { }

    getSports(): Observable<Sport[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add('SportService: fetched sports');
      return this.http.get<Sport[]>('/api/sports');
    }

    getSport(id: number): Observable<Sport> {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`SportService: fetched sport id=${id}`);
      return this.http.get<Sport>(`/api/sports/${id}`);
    }

    updateSport(sport: Sport) {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`SportService: update sport id=${sport.id}`);
      return this.http.put(`/api/sports/${sport.id}`, sport);
    }
}
