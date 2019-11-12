import { MosaicComponent } from './../mosaic.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moasic-small',
  templateUrl: './moasic-small.component.html',
  styleUrls: ['./moasic-small.component.scss']
})
export class MoasicSmallComponent extends MosaicComponent  implements OnInit {

  imageLink: string;
  title: string;
  constructor() {
    super();
   }

  ngOnInit() {
  }

}
