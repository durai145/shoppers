import { UtilsServiceService } from './../utils-service.service';
import { Link } from './../link';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
// Grocery Optical Pharmacy Photo Travel
export class LandingPageComponent implements OnInit {
  listA: Array<Link> = new Array<Link>(new Link('Home', '1'),
  new Link('Grocery', '2'),
  new Link('Optical', '3'),
  new Link('Photo', '4'),
  new Link('Travel', '5')
  );
  menuItemsJson: string = UtilsServiceService.jsonStringify(this.listA);
  constructor() { }

  ngOnInit() {
  }

}
