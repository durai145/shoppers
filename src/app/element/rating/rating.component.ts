import { ElementComponent } from './../element.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent extends ElementComponent  implements OnInit {

  @Input() currentRate: number;
  constructor() {
    super();
   }

  ngOnInit() {
  }

}
