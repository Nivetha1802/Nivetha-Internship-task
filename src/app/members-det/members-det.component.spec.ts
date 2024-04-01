import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersDetComponent } from './members-det.component';

describe('MembersDetComponent', () => {
  let component: MembersDetComponent;
  let fixture: ComponentFixture<MembersDetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembersDetComponent]
    });
    fixture = TestBed.createComponent(MembersDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
