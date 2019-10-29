import { ElementComponent } from './../element.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent extends ElementComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
