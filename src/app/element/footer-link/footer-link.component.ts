import { Component, OnInit, Input } from '@angular/core';
import { ElementComponent } from '../element.component';

@Component({
  selector: 'app-footer-link',
  templateUrl: './footer-link.component.html',
  styleUrls: ['./footer-link.component.scss']
})
export class FooterLinkComponent extends ElementComponent implements OnInit {

  @Input() name: String;
  @Input() url: String;

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
