import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemHeroService } from './inMemHeroService';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SportsComponent } from './sports/sports.component';
import { SportsDetailsComponent } from './sports/sports-details/sports-details.component';
import { LocationsDetailsComponent } from './sports/locations-details/locations-details.component';
import { CategoriesDetailsComponent } from './sports/categories-details/categories-details.component';
import { TeamsDetailsComponent } from './sports/teams-details/teams-details.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import * as fromSport from './sports/state/sport.reducer';
import { SportEffects } from './sports/state/sport.effects';
import * as fromLocation from './sports/locations-details/state/location.reducer';
import { LocationEffects } from './sports/locations-details/state/location.effects';
import * as fromCategory from './sports/categories-details/state/category.reducer';
import { CategoryEffects } from './sports/categories-details/state/category.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SportsComponent,
    SportsDetailsComponent,
    LocationsDetailsComponent,
    CategoriesDetailsComponent,
    TeamsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService),
    FormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forFeature(fromSport.sportFeatureKey, fromSport.reducer),
    EffectsModule.forFeature([SportEffects, LocationEffects, CategoryEffects]),
    StoreModule.forFeature(fromLocation.locationFeatureKey, fromLocation.reducer),
    StoreModule.forFeature(fromCategory.categoryFeatureKey, fromCategory.reducer),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    //   logOnly: environment.production
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
