import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroRightComponent } from './intro-right.component';

describe('IntroRightComponent', () => {
  let component: IntroRightComponent;
  let fixture: ComponentFixture<IntroRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroRightComponent]
    });
    fixture = TestBed.createComponent(IntroRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
