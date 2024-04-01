import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPlacesComponent } from './child-places.component';

describe('ChildPlacesComponent', () => {
  let component: ChildPlacesComponent;
  let fixture: ComponentFixture<ChildPlacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildPlacesComponent]
    });
    fixture = TestBed.createComponent(ChildPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
