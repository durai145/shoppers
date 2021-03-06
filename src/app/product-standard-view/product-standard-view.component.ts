import { ElementComponent } from './../element/element.component';
import { ProductDetails } from './../product-details';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-standard-view',
  templateUrl: './product-standard-view.component.html',
  styleUrls: ['./product-standard-view.component.scss']
})
export class ProductStandardViewComponent extends ElementComponent implements OnInit {
  @Input() item: ProductDetails;
  @Output() addedProduct = new EventEmitter();
  constructor() {
    super();
   }

  ngOnInit() {
  }

  addToCart(product) {
    this.addedProduct.emit(product);
  }
}
