import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbiStatComponent } from './rbistat.component';

describe('RbiComponent', () => {
  let component: RbiStatComponent;
  let fixture: ComponentFixture<RbiStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbiStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbiStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
