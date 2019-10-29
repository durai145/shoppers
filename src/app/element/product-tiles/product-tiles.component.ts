import { ElementComponent } from './../element.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-tiles',
  templateUrl: './product-tiles.component.html',
  styleUrls: ['./product-tiles.component.scss']
})
export class ProductTilesComponent extends ElementComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
