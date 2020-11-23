import { ProductDetails } from './../../../product-details';
import { MosaicComponent } from './../mosaic.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moasic-small',
  templateUrl: './moasic-small.component.html',
  styleUrls: ['./moasic-small.component.scss']
})
export class MoasicSmallComponent extends MosaicComponent  implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() product: ProductDetails;

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
