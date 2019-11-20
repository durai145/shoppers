import { ElementComponent } from './../element/element.component';
import { ProductDetails } from './../product-details';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-standard-view',
  templateUrl: './product-standard-view.component.html',
  styleUrls: ['./product-standard-view.component.scss']
})
export class ProductStandardViewComponent extends ElementComponent implements OnInit {
  @Input() item: ProductDetails;
  constructor() {
    super();
   }

  ngOnInit() {
  }

}
