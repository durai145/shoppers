import { ElementComponent } from './../element.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent extends ElementComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
