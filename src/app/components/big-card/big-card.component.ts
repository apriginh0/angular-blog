import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-big-card',
    templateUrl: './big-card.component.html',
    styleUrls: ['./big-card.component.css'],
    standalone: true,
    imports: [RouterLink]
})
export class BigCardComponent {
  @Input()
  photoCover:string = "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png";
  @Input()
  cardTitle:string = "Título";
  @Input()
  cardDescription:string = "Descrição";
  @Input()
  Id:string = "0";

}
