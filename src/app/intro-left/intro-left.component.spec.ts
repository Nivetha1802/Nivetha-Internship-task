import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroLeftComponent } from './intro-left.component';

describe('IntroLeftComponent', () => {
  let component: IntroLeftComponent;
  let fixture: ComponentFixture<IntroLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroLeftComponent]
    });
    fixture = TestBed.createComponent(IntroLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
