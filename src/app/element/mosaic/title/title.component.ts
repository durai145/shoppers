import { ElementComponent } from './../../element.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent extends ElementComponent implements OnInit {

  @Input() value: string;
  constructor() {
    super();
   }

  ngOnInit() {
  }

}
