import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvstatComponent } from './svstat.component';

describe('SvstatComponent', () => {
  let component: SvstatComponent;
  let fixture: ComponentFixture<SvstatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvstatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
