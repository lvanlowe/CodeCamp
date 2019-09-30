import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SportEffects } from './sport.effects';

describe('SportEffects', () => {
  let actions$: Observable<any>;
  let effects: SportEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SportEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<SportEffects>(SportEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
