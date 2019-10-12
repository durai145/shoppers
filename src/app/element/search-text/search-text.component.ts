import { ElementComponent } from './../element.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.scss']
})
export class SearchTextComponent extends ElementComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
