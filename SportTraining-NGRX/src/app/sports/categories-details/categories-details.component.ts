import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { Team } from 'src/app/team';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TeamService } from '../service/team.service';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.scss']
})
export class CategoriesDetailsComponent implements OnInit {

  category: Category;
  teams: Team[];

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private teamService: TeamService,
    private location: Location
  ) {}

  ngOnInit() {
    const categoryid = this.getCategory();
    this.getTeams(categoryid);
  }

  getCategory(): number {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id).subscribe(category => (this.category = category));
    return id;
  }

  getTeams(categoryid: number): void {
    this.teamService.getTeamsByCategory(categoryid).subscribe(teams => (this.teams = teams));
  }

  updateCategory(): void {
    this.categoryService.updateCategory(this.category);
  }

  goBack(): void {
    this.location.back();
  }
}

