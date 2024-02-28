import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFooterComponent } from './sign-up-footer.component';

describe('SignUpFooterComponent', () => {
  let component: SignUpFooterComponent;
  let fixture: ComponentFixture<SignUpFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpFooterComponent]
    });
    fixture = TestBed.createComponent(SignUpFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
