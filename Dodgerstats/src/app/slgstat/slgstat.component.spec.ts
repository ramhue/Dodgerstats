import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlgstatComponent } from './slgstat.component';

describe('SlgstatComponent', () => {
  let component: SlgstatComponent;
  let fixture: ComponentFixture<SlgstatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlgstatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlgstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
