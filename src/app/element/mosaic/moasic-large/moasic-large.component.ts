import { ProductDetails } from './../../../product-details';
import { Component, OnInit, Input } from '@angular/core';
import { MosaicComponent } from '../mosaic.component';

@Component({
  selector: 'app-moasic-large',
  templateUrl: './moasic-large.component.html',
  styleUrls: ['./moasic-large.component.scss']
})
export class MoasicLargeComponent extends MosaicComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() product1: ProductDetails;
  @Input() product2: ProductDetails;
  @Input() product3: ProductDetails;
  constructor() {
     super();
   }

  ngOnInit() {
  }

}
