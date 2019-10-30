import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrStatComponent } from './hrstat.component';

describe('StatComponent', () => {
  let component: HrStatComponent;
  let fixture: ComponentFixture<HrStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
