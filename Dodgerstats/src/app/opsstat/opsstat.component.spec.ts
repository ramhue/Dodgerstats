import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsStatComponent } from './opsstat.component';

describe('OpsComponent', () => {
  let component: OpsStatComponent;
  let fixture: ComponentFixture<OpsStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpsStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
