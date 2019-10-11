import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { Team } from 'src/app/team';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store, select } from '@ngrx/store';
import * as fromCategory from './state/category.reducer';
import * as categorySelector from './state/category.selector';
import * as categoryActions from './state/category.actions';
import * as teamSelector from '../teams-details/state/team.selector';
import * as teamActions from '../teams-details/state/team.actions';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.scss']
})
export class CategoriesDetailsComponent implements OnInit {

  category: Category;
  teams: Team[];
  isTeamLoading: boolean;
  isTeamLoaded: boolean;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromCategory.State>,
    private location: Location
  ) {}

  ngOnInit() {
    const categoryid = this.getCategory();
    this.getTeams(categoryid);

  }

  getCategory(): number {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(categoryActions.SetCurrentCategory({id: id}));
    const categoryDetail$ = this.store.pipe(select(categorySelector.selectCategory));
    categoryDetail$.subscribe(results => {
      this.category = Object.assign({}, results);
    });
    return id;
  }

  getTeams(categoryid: number): void {
    this.store.dispatch(teamActions.SetCurrentCategory({id: categoryid}));
    const teamLoaded$ = this.store.pipe(select(teamSelector.getTeamLoadedIndicator));
    teamLoaded$.subscribe(results => {
      this.isTeamLoaded = results;
    });
    if (!this.isTeamLoaded) {
      this.store.dispatch(
        teamActions.LoadTeams({}));
    }
    this.store.pipe(select(teamSelector.getTeamLoadingIndicator)).subscribe(loading => {
      this.isTeamLoading = loading;
      if (!this.isTeamLoading) {
        const team$ = this.store.pipe(select(teamSelector.selectTeamsByCategory));
        team$.subscribe(results => {
          this.teams = results;
        });
      }
    });

  }

  updateCategory(): void {
    this.store.dispatch(categoryActions.UpdateCategories({category: this.category}));
  }

  goBack(): void {
    this.location.back();
  }
}

