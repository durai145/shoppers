import { ProductDetails } from './../product-details';
import { UtilsServiceService } from './../utils-service.service';
import { Link } from './../link';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
// Grocery Optical Pharmacy Photo Travel
export class LandingPageComponent implements OnInit {
  listA: Array<Link> = new Array<Link>(new Link('Home', '1'),
  new Link('Grocery', '2'),
  new Link('Optical', '3'),
  new Link('Photo', '4'),
  new Link('Travel', '5')
  );
  product1: ProductDetails = new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', 'notes', '3 days');
  product2: ProductDetails = new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', 'notes', '3 days');
  product3: ProductDetails = new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', 'notes', '3 days');
  product4: ProductDetails = new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', 'notes', '3 days');
  cartList: Array<ProductDetails> = new Array<ProductDetails>(new ProductDetails('prodId', '../../../assets/img/tomato_green.png', ['id1', 'id2'], 10.0, 1, 'this is Test', 'detail desc', 'notes', '120'));
  menuItemsJson: string = UtilsServiceService.jsonStringify(this.listA);
  productList: Array<ProductDetails> = new Array(this.product1,
   this.product2, this.product3, this.product4 );

  constructor() { }

  ngOnInit() {

  }

  addLink(link: Link) {
    this.listA.push(new Link('Travel6', '6'));
    this.menuItemsJson = UtilsServiceService.jsonStringify(this.listA);
  }

  addProduct(product: ProductDetails) {
    this.cartList.push(product);
  }

}
