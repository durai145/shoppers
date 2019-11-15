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
  @Input() imageId1: string;
  @Input() imageId2: string;
  @Input() imageId3: string;

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
