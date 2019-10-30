import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WstatComponent } from './wstat.component';

describe('WstatComponent', () => {
  let component: WstatComponent;
  let fixture: ComponentFixture<WstatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WstatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
