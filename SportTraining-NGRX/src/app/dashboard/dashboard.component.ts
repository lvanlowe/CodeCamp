import { Component, OnInit } from '@angular/core';

import { Sport } from '../sport';
import { Store, select } from '@ngrx/store';
import * as fromSport from '../sports/state/sport.reducer';
import * as sportSelector from '../sports/state/sport.selector';
import * as sportActions from '../sports/state/sport.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sports: Sport[] = [];
  isLoaded: boolean;
  isLoading: boolean;

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
          this.sports = results.slice(1, 5);
        });
      }
    });
  }

}
