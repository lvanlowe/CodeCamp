import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Sport } from '../sport';
import { SportService } from './service/sport.service';
import * as fromSport from './state/sport.reducer';
import * as sportActions from './state/sport.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  sports: Sport[];

  constructor(private sportService: SportService, private store: Store<fromSport.State>) {}

  ngOnInit() {
    this.getSports();
    this.store.dispatch(
      sportActions.LoadSports({}));
  }

  getSports(): void {
    this.sportService.getSports().subscribe(sports => (this.sports = sports));
  }



}
