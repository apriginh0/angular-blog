import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  photoCover:string = "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png";
  @Input()
  cardTitle:string = "Título";
  @Input()
  Id:string = "0";

}
