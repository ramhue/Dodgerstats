import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchingComponent } from './pitching.component';

describe('PitchingComponent', () => {
  let component: PitchingComponent;
  let fixture: ComponentFixture<PitchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
