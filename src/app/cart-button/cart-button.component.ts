import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductDetails } from '../product-details';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit {

  @Input() item:ProductDetails;
  @Output() cartButton = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
