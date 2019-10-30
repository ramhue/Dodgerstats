import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErastatComponent } from './erastat.component';

describe('ErastatComponent', () => {
  let component: ErastatComponent;
  let fixture: ComponentFixture<ErastatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErastatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErastatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
