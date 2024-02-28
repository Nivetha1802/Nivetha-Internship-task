import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpHeaderComponent } from './sign-up-header.component';

describe('SignUpHeaderComponent', () => {
  let component: SignUpHeaderComponent;
  let fixture: ComponentFixture<SignUpHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpHeaderComponent]
    });
    fixture = TestBed.createComponent(SignUpHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
