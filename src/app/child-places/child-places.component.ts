import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-places',
  templateUrl: './child-places.component.html',
  styleUrls: ['./child-places.component.css']
})
export class ChildPlacesComponent {
  @Output() remove: EventEmitter<any> = new EventEmitter();

  removeComponent() {
    this.remove.emit();
  }
}
