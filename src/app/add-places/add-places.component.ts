import { Component, ComponentFactoryResolver, ViewContainerRef , Input} from '@angular/core';
import { ChildPlacesComponent } from '../child-places/child-places.component';
import { XhrFactory } from '@angular/common';

@Component({
  selector: 'app-add-places',
  templateUrl: './add-places.component.html',
  styleUrls: ['./add-places.component.css']
})
export class AddPlacesComponent {
  @Input() trip: any;
  components: any[] = [];

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) { }

  addComponent() {
    const factory = this.resolver.resolveComponentFactory(ChildPlacesComponent);
    // const componentRef = this.container.createComponent(factory);
    this.components.push(factory);
  }

  removeComponent(index: number) {
    // this.container.remove(index);
    this.components.splice(index, 1);
}
}
