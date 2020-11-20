import { ProductDetails } from './../../product-details';
import { ElementComponent } from './../element.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent extends ElementComponent implements OnInit {
  @Input() product: ProductDetails;
  constructor() {
    super();
  }

  ngOnInit() {
    console.log(this.product);
  }

}
