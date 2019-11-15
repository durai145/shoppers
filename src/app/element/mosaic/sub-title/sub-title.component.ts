import { ElementComponent } from './../../element.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-title',
  templateUrl: './sub-title.component.html',
  styleUrls: ['./sub-title.component.scss']
})
export class SubTitleComponent extends ElementComponent  implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
