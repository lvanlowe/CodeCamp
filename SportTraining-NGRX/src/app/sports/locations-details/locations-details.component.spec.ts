import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsDetailsComponent } from './locations-details.component';

describe('LocationsDetailsComponent', () => {
  let component: LocationsDetailsComponent;
  let fixture: ComponentFixture<LocationsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
