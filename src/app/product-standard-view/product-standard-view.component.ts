import { ElementComponent } from './../element/element.component';
import { ProductDetails } from './../product-details';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckOutService } from '../check-out.service';

@Component({
  selector: 'app-product-standard-view',
  templateUrl: './product-standard-view.component.html',
  styleUrls: ['./product-standard-view.component.scss']
})
export class ProductStandardViewComponent extends ElementComponent implements OnInit {
  @Input() item: ProductDetails;
  @Output() addedProduct = new EventEmitter();
  cos : CheckOutService;
  cartStatus: number;
  constructor(cos : CheckOutService) {
    super();
    this.cos =cos;
   }

  ngOnInit() {
  }

  addToCart(product) {
    
    CheckOutService.addToCart(product);
    this.cartStatus = CheckOutService.getCartStatus(this.item.productId)
    this.addedProduct.emit(product);
    
  }

}
