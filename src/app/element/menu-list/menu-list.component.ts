import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  constructor() { }
  @Input() menu: any;
  @Output() addedLink = new EventEmitter();
  ngOnInit() {
  }
  menuChanged(product) {
    if (this.menu.num === 0) {
     // this.productRemoved.emit(this.product)
    }
 }

 addMenu(menu) {
  this.addedLink.emit(menu);
 }

}
