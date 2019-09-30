import { ElementComponent } from './../element.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})
export class MenuPanelComponent extends ElementComponent implements OnInit {

  @Input() body: string;
  constructor() {
    super();
   }

  ngOnInit() {
  }

}
