import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CockpitAppComponent } from './cockpit-app.component';

describe('CockpitAppComponent', () => {
  let component: CockpitAppComponent;
  let fixture: ComponentFixture<CockpitAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CockpitAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CockpitAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
