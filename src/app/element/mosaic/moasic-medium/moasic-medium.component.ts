import { Component, OnInit } from '@angular/core';
import { MosaicComponent } from '../mosaic.component';

@Component({
  selector: 'app-moasic-medium',
  templateUrl: './moasic-medium.component.html',
  styleUrls: ['./moasic-medium.component.scss']
})
export class MoasicMediumComponent extends MosaicComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
