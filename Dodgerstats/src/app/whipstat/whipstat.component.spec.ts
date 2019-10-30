import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhipstatComponent } from './whipstat.component';

describe('WhipstatComponent', () => {
  let component: WhipstatComponent;
  let fixture: ComponentFixture<WhipstatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhipstatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhipstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
