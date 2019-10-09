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
    // this.store.dispatch(new sportActions.GetSport(id));
    // const sportDetail$ = this.store.pipe(select(sportSelector.getSport));
    sportDetail$.subscribe(results => {
      this.sport = Object.assign({}, results);
    });
    // this.store.dispatch(new locationActions.LoadLocations(id));
    // this.store.dispatch(new categoryActions.LoadCategories(id));
    return id;
  }

  getLocations(sportid: number): void {
    this.locationService.getLocationsBySport(sportid).subscribe(locations => (this.locations = locations));
  }

  getCategories(sportid: number): void {
    this.categoryService.getCategoriesBySport(sportid).subscribe(categories => (this.categories = categories));
  }

  updateSports(): void {
    this.store.dispatch( sportActions.UpdateSports({sport: this.sport}));
  }

  goBack(): void {
    this.location.back();
  }
}
