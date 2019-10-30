import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SostatComponent } from './sostat.component';

describe('SostatComponent', () => {
  let component: SostatComponent;
  let fixture: ComponentFixture<SostatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SostatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SostatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
