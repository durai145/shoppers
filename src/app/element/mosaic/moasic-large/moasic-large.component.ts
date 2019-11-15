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
  @Input() imageId1: string;
  @Input() imageId2: string;
  @Input() imageId3: string;
  constructor() {
     super();
   }

  ngOnInit() {
  }

}
