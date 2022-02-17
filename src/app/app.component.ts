
import { CardServiceService } from './card-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Link } from './link';
import { ProductDetails } from './product-details';
import { UtilsServiceService } from './utils-service.service';
import { SharedServiceService } from './shared-service.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {



  count=0;

  listA: Array<Link> = new Array<Link>(new Link('Home', 'home'),
  new Link('Grocery', 'grocery'),
  new Link('Optical', 'optical'),
  new Link('Photo', 'photo'),
  new Link('Travel', 'travel')
  );

  product1: ProductDetails = new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', 'notes', '3 days');
  product2: ProductDetails = new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', 'notes', '3 days');
  product3: ProductDetails = new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', 'notes', '3 days');
  product4: ProductDetails = new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', 'notes', '3 days');
  cartList: Array<ProductDetails> = new Array<ProductDetails>(new ProductDetails('prodId', '../../../assets/img/tomato_green.png', ['id1', 'id2'], 10.0, 1, 'this is Test', 'detail desc', 'notes', '120'));
  menuItemsJson: string = UtilsServiceService.jsonStringify(this.listA);
  productList: Array<ProductDetails> = new Array(this.product1,
   this.product2, this.product3, this.product4 );

  sss: SharedServiceService;
  title = 'shoppers';
  cardService: CardServiceService;
  constructor(crdServiceService: CardServiceService, sss: SharedServiceService) {

    

    this.cardService = crdServiceService;
    this.sss = sss;

  }
  getProductList() {
    return JSON.stringify(this.cardService.getShippingPrices());
  }


}
