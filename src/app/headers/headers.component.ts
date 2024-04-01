import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {
  @Input() heading:string | undefined;
  @Input() link:string | undefined;
}
