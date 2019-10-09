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
  sport: Sport;
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
          // this.sport = {id: 4, name: 'kan'};
          // this.store.dispatch(
          //   sportActions.UpdateSports({sport: {id: 4, name: 'kan'}}));
        });

        // const sport$ = this.store.select(sportSelector.selectSport(1));
        // sport$.subscribe(results => {
        //   this.sport = results;
        //   console.warn(this.sport);
        // });

      //   const  id = 1;

      //   this.store.dispatch(
      //     sportActions.SetCurrentSport({id: 2}));
      // this.store.dispatch(
      //      sportActions.UpdateSports({sport: {id:4, name: 'bbn'}}));
      //   const sport1$ =this.store.pipe(
      //     select(sportSelector.selectSport));

          // sport1$.subscribe(results => {
          //   this.sport = results;
          //   console.warn(results);
          //   results.name = 'van11@aol.com';
          //   this.store.dispatch(
          //    sportActions.UpdateSports({sport: results}));
          // });
    // sport1$.subscribe(results => {

    //   this.sport = Object.assign({}, results);
    //   this.sport.name = 'van11@aol.com';
    //   console.warn(this.sport);
    //   this.store.dispatch(
    //        sportActions.UpdateSports({sport: this.sport}));

    //   });
  }});}}
