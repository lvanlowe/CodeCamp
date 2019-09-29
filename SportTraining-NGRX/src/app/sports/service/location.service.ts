import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/message.service';
import { HttpClient } from '@angular/common/http';
import { Program } from 'src/app/location';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private messageService: MessageService,
    private http: HttpClient) { }

    getLocations(): Observable<Program[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add('LocationService: fetched locations');
      return this.http.get<Program[]>('/api/locations');
    }


    getLocationsBySport(sportid: number): Observable<Program[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add(`LocationService: fetched location sport.id=${sportid}`);
      return this.http.get<Program[]>(`/api/locations?sportid=${sportid}`);
    }

    getLocation(id: number): Observable<Program> {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`LocationService: fetched location id=${id}`);
      return this.http.get<Program>(`/api/locations/${id}`);
    }

    updateLocation(location: Program) {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`LocationService: update location id=${location.id}`);
      return this.http.put(`/api/locations${location.id}`, location);
    }
}
