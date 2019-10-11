import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SportService } from '../service/sport.service';
import { Sport } from 'src/app/sport';
import { Program } from 'src/app/location';
import { LocationService } from '../service/location.service';
import { Category } from 'src/app/category';
import { CategoryService } from '../service/category.service';
import { Store, select } from '@ngrx/store';
import * as fromSport from '../state/sport.reducer';
import * as sportActions from '../state/sport.actions';
import * as sportSelector from '../state/sport.selector';
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
    private locationService: LocationService,
    private categoryService: CategoryService,
    private location: Location
  ) {}

  ngOnInit() {
    const sportid = this.getSport();
    this.getLocations(sportid);
    this.getCategories(sportid);
  }

  getSport(): number {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(sportActions.SetCurrentSport({id: id}));
    const sportDetail$ = this.store.pipe(select(sportSelector.selectSport));
    sportDetail$.subscribe(results => {
      this.sport = Object.assign({}, results);
    });

    return id;
  }

  getLocations(sportid: number): void {
    this.store.dispatch(locationActions.SetCurrentSport({id: sportid}));
    const locationLoaded$ = this.store.pipe(select(locationSelector.getLocationLoadedIndicator));
    locationLoaded$.subscribe(results => {
      this.isLocationLoaded = results;
    });
    if (!this.isLocationLoaded) {
      this.store.dispatch(
        locationActions.LoadLocations({}));
    }
    this.store.pipe(select(locationSelector.getLocationLoadingIndicator)).subscribe(loading => {
      this.isLocationLoading = loading;
      if (!this.isLocationLoading) {
        const location$ = this.store.pipe(select(locationSelector.selectLocationBySport));
        location$.subscribe(results => {
          this.locations = results;
        });
      }
    });
  }

  getCategories(sportid: number): void {
    this.store.dispatch(categoryActions.SetCurrentSport({id: sportid}));
    const categoryLoaded$ = this.store.pipe(select(categorySelector.getCategoryLoadedIndicator));
    categoryLoaded$.subscribe(results => {
      this.isCategoryLoaded = results;
    });
    if (!this.isCategoryLoaded) {
      this.store.dispatch(
        categoryActions.LoadCategories({}));
    }
    this.store.pipe(select(categorySelector.getCategoryLoadingIndicator)).subscribe(loading => {
      this.isCategoryLoading = loading;
      if (!this.isCategoryLoading) {
        const category$ = this.store.pipe(select(categorySelector.selectCategoryBySport));
        category$.subscribe(results => {
          this.categories = results;
        });
      }
    });
  }

  updateSports(): void {
    this.store.dispatch( sportActions.UpdateSports({sport: this.sport}));
  }

  goBack(): void {
    this.location.back();
  }
}
