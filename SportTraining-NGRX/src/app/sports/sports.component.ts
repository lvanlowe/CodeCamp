import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Sport } from '../sport';
import { SportService } from './service/sport.service';
import * as fromSport from './state/sport.reducer';
import * as sportActions from './state/sport.actions';
import * as sportSelector from './state/sport.selector'
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  sports: Sport[];
  isLoading: boolean;

  constructor(private sportService: SportService, private store: Store<fromSport.State>) {}

  ngOnInit() {
    this.getSports();
    this.store.dispatch(new sportActions.LoadSports());
    this.store.pipe(select(sportSelector.getSportLoadingIndicator)).subscribe(loading => {
      this.isLoading = loading;
      if (!this.isLoading) {
        const sportDetails$ = this.store.pipe(select(sportSelector.getSports));
        sportDetails$.subscribe(results => {
          this.sports = results;
        })
      }
    })
  }

  getSports(): void {
    // this.sportService.getSports().subscribe(sports => (this.sports = sports));
  }



}
