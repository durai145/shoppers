import { Component, OnInit, Input } from '@angular/core';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends ElementComponent implements OnInit {


  @Input() LINKB: string;
  @Input() LINKF: string;
  @Input() LINKC: string;

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
