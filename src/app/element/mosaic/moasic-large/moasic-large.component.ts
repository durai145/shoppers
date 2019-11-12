import { Component, OnInit } from '@angular/core';
import { MosaicComponent } from '../mosaic.component';

@Component({
  selector: 'app-moasic-large',
  templateUrl: './moasic-large.component.html',
  styleUrls: ['./moasic-large.component.scss']
})
export class MoasicLargeComponent extends MosaicComponent implements OnInit {

  constructor() {
     super();
   }

  ngOnInit() {
  }

}
