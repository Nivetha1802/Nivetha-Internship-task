import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanInputAllComponent } from './plan-input-all.component';

describe('PlanInputAllComponent', () => {
  let component: PlanInputAllComponent;
  let fixture: ComponentFixture<PlanInputAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanInputAllComponent]
    });
    fixture = TestBed.createComponent(PlanInputAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
