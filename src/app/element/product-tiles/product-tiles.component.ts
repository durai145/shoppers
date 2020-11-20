import { ProductDetails } from './../../product-details';
import { ElementComponent } from './../element.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-tiles',
  templateUrl: './product-tiles.component.html',
  styleUrls: ['./product-tiles.component.scss']
})
export class ProductTilesComponent extends ElementComponent implements OnInit {

  @Input()  productList: Array<ProductDetails>;
  constructor() {
    super();
   }

  ngOnInit() {
  }

}
