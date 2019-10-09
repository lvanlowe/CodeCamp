import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';


import { TeamEffects } from './team.effects';

describe('TeamEffects', () => {

  let effects: TeamEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TeamEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<TeamEffects>(TeamEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
