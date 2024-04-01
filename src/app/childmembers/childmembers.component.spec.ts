import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildmembersComponent } from './childmembers.component';

describe('ChildmembersComponent', () => {
  let component: ChildmembersComponent;
  let fixture: ComponentFixture<ChildmembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildmembersComponent]
    });
    fixture = TestBed.createComponent(ChildmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
