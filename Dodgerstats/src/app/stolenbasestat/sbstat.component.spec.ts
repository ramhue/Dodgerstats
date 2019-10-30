import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbStatComponent } from './sbstat.component';

describe('SbComponent', () => {
  let component: SbStatComponent;
  let fixture: ComponentFixture<SbStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
