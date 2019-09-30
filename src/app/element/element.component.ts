import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input() B: string;
  @Input() F: string;
  @Input() C: string;

  constructor() {
    console.log(this.F);
    console.log(this.B);
    console.log(this.C);
  }

  ngOnInit() {
    console.log(this.F);
    console.log(this.B);
    console.log(this.C);
  }

  getClassName() {
    //         .#{$colorKey}#{$bgKey}#{$fontKey} {
    return  this.C + '' + this.B + '' + this.F;
  }
}
