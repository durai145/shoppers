import { ProductDetails } from './../../product-details';
import { ElementComponent } from './../element.component';
import { Component, OnInit, Input } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-mosaic',
  templateUrl: './mosaic.component.html',
  styleUrls: ['./mosaic.component.scss']
})
export class MosaicComponent  extends ElementComponent implements OnInit {

  @Input() link1: string;
  @Input() link2: string;
  @Input() product1: ProductDetails;
  @Input() product2: ProductDetails;
  @Input() product3: ProductDetails;
  @Input() product4: ProductDetails;
  constructor() {
    super();
   }

  ngOnInit() {
    console.log(this.link1);
  }

}
