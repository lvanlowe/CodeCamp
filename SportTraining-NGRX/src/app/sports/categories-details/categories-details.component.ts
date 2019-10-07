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

    this.store.pipe(select(teamSelector.getTeamLoadingIndicator)).subscribe(loading => {
      this.isTeamLoading = loading;
      if (!this.isTeamLoading) {
        const location$ = this.store.pipe(select(teamSelector.getTeams));
        location$.subscribe(results => {
          this.teams = results;
        });
      }
    });
  }

  getCategory(): number {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new categoryActions.GetCategory(id));
    const categoryDetail$ = this.store.pipe(select(categorySelector.getCategory));
    categoryDetail$.subscribe(results => {
      this.category = Object.assign({}, results);
    });
    this.store.dispatch(new teamActions.LoadTeamsCategory(id));
    return id;
  }

  updateCategory(): void {
    this.store.dispatch(new categoryActions.UpdateCategory(this.category));
  }

  goBack(): void {
    this.location.back();
  }
}

