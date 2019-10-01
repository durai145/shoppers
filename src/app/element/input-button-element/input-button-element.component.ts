import { ElementComponent } from './../element.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-button-element',
  templateUrl: './input-button-element.component.html',
  styleUrls: ['./input-button-element.component.scss']
})
export class InputButtonElementComponent extends ElementComponent implements OnInit {
  @Input() valueName: string;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
