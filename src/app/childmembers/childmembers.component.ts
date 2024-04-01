import { Component , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childmembers',
  templateUrl: './childmembers.component.html',
  styleUrls: ['./childmembers.component.css']
})
export class ChildmembersComponent {
  @Output() remove: EventEmitter<any> = new EventEmitter();

  removeComponent() {
    this.remove.emit();
  }

}
