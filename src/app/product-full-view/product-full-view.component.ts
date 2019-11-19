import { ProductDetails } from './../product-details';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-full-view',
  templateUrl: './product-full-view.component.html',
  styleUrls: ['./product-full-view.component.scss']
})
export class ProductFullViewComponent implements OnInit {

  @Input() item: ProductDetails;
  constructor() { }

  ngOnInit() {
  }

}
