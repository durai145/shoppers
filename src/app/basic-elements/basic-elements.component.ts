import { UtilsServiceService } from './../utils-service.service';
import { Link } from './../link';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-elements',
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.scss']
})
export class BasicElementsComponent implements OnInit {
  listA: Array<Link> = new Array<Link>(new Link('1', '1'), new Link('2', '2'));
  menuItemsJson: string = UtilsServiceService.jsonStringify(this.listA);
  constructor() { }

  ngOnInit() {
  }

}
