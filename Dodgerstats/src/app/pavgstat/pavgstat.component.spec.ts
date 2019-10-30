import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PavgstatComponent } from './pavgstat.component';

describe('PavgstatComponent', () => {
  let component: PavgstatComponent;
  let fixture: ComponentFixture<PavgstatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PavgstatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PavgstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
