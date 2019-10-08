import { Component, OnInit } from '@angular/core';
import { Sport } from '../sport';
import * as fromSport from './state/sport.reducer';
import * as sportActions from './state/sport.actions';
import * as sportSelector from './state/sport.selector';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  sports: Sport[];
  isLoading: boolean;
  isLoaded: boolean;

  constructor(private store: Store<fromSport.State>) {}

  ngOnInit() {

    const loaded$ = this.store.pipe(select(sportSelector.getSportLoadedIndicator));
    loaded$.subscribe(results => {
      this.isLoaded = results;
    });
    if (!this.isLoaded) {
      this.store.dispatch(
        sportActions.LoadSports({}));
    }

    this.store.pipe(select(sportSelector.getSportLoadingIndicator)).subscribe(loading => {
      this.isLoading = loading;
      if (!this.isLoading) {
        const sportDetails$ = this.store.select(sportSelector.selectAllSports);
        sportDetails$.subscribe(results => {
          this.sports = results;
        });
      }
    });

  }

}
