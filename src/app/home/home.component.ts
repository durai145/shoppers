import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../product-details';
import { UtilsServiceService } from '../utils-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  product1: ProductDetails = new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', 'notes', '3 days');
  product2: ProductDetails = new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', 'notes', '3 days');
  product3: ProductDetails = new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', 'notes', '3 days');
  product4: ProductDetails = new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', 'notes', '3 days');
  cartList: Array<ProductDetails> = new Array<ProductDetails>(new ProductDetails('prodId', '../../../assets/img/tomato_green.png', ['id1', 'id2'], 10.0, 1, 'this is Test', 'detail desc', 'notes', '120'));
  productList: Array<ProductDetails> = new Array(this.product1,
   this.product2, this.product3, this.product4 );
  constructor() {
     
   }

  ngOnInit() {
  }

  
}