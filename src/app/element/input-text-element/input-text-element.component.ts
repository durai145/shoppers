import { ElementComponent } from './../element.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-text-element',
  templateUrl: './input-text-element.component.html',
  styleUrls: ['./input-text-element.component.scss']
})
export class InputTextElementComponent extends ElementComponent implements OnInit {
  @Input() modelName: string;
  constructor() {
    super();
   }

  ngOnInit() {
  }

}
