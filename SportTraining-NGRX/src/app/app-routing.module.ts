import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { SportsComponent } from './sports/sports.component';
import { SportsDetailsComponent } from './sports/sports-details/sports-details.component';
import { LocationsDetailsComponent } from './sports/locations-details/locations-details.component';
import { CategoriesDetailsComponent } from './sports/categories-details/categories-details.component';
import { TeamsDetailsComponent } from './sports/teams-details/teams-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'sport/:id', component: SportsDetailsComponent },
  { path: 'location/:id', component: LocationsDetailsComponent },
  { path: 'category/:id', component: CategoriesDetailsComponent },
  { path: 'team/:id', component: TeamsDetailsComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'sports', component: SportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
