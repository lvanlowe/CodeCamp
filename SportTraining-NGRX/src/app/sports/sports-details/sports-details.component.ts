import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Sport } from 'src/app/sport';
import { Program } from 'src/app/location';
import { Category } from 'src/app/category';
import { Store, select } from '@ngrx/store';
import * as fromSport from '../state/sport.reducer';
import * as sportSelector from '../state/sport.selector';
import * as sportActions from '../state/sport.actions';
import * as locationSelector from '../locations-details/state/location.selector';
import * as locationActions from '../locations-details/state/location.actions';
import * as categorySelector from '../categories-details/state/category.selector';
import * as categoryActions from '../categories-details/state/category.actions';

@Component({
  selector: 'app-sports-details',
  templateUrl: './sports-details.component.html',
  styleUrls: ['./sports-details.component.scss']
})

export class SportsDetailsComponent implements OnInit {

  sport: Sport;
  locations: Program[];
  categories: Category[];
  isLocationLoading: boolean;
  isLocationLoaded: boolean;
  isCategoryLoading: boolean;
  isCategoryLoaded: boolean;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromSport.State>,
    private location: Location
  ) {}

  ngOnInit() {
    const sportid = this.getSport();

    this.store.pipe(select(locationSelector.getLocationLoadingIndicator)).subscribe(loading => {
      this.isLocationLoading = loading;
      if (!this.isLocationLoading) {
        const location$ = this.store.pipe(select(locationSelector.getLocations));
        location$.subscribe(results => {
          this.locations = results;
        });
      }
    });

    this.store.pipe(select(categorySelector.getCategoryLoadingIndicator)).subscribe(loading => {
      this.isCategoryLoading = loading;
      if (!this.isCategoryLoading) {
        const category$ = this.store.pipe(select(categorySelector.getCategories));
        category$.subscribe(results => {
          this.categories = results;
        });
      }
    });

  }

  getSport(): number {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new sportActions.GetSport(id));
    const sportDetail$ = this.store.pipe(select(sportSelector.getSport));
    sportDetail$.subscribe(results => {
      this.sport = Object.assign({}, results);
    });
    this.store.dispatch(new locationActions.LoadLocations(id));
    this.store.dispatch(new categoryActions.LoadCategories(id));
    return id;
  }

  updateSports(): void {
    this.store.dispatch(new sportActions.UpdateSport(this.sport));
  }

  goBack(): void {
    this.location.back();
  }
}
