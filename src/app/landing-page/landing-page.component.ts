import { UtilsServiceService } from './../utils-service.service';
import { Link } from './../link';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  listA: Array<Link> = new Array<Link>(new Link('Home', '1'), new Link('Shopping', '2'));
  menuItemsJson: string = UtilsServiceService.jsonStringify(this.listA);
  constructor() { }

  ngOnInit() {
  }

}
