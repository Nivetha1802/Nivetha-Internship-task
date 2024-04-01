import { Component, ComponentFactoryResolver, ViewContainerRef, Input } from '@angular/core';
import { ChildmembersComponent } from '../childmembers/childmembers.component';
import { PlanInputAllComponent } from '../plan-input-all/plan-input-all.component';

@Component({
  selector: 'app-members-det',
  templateUrl: './members-det.component.html',
  styleUrls: ['./members-det.component.css']
})
export class MembersDetComponent {

  @Input() trip: any; 
  components: any[] = [];


  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) { }

  addComponent() {
    const factory = this.resolver.resolveComponentFactory(ChildmembersComponent);
    //const componentRef = this.container.createComponent(factory);
    this.components.push(factory);
  }

  removeComponent(index: number) {
    // this.container.remove(index);
    this.components.splice(index, 1);
}
}
