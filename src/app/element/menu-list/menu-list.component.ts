import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  constructor() { }
  @Input() menu: any;
  ngOnInit() {
  }
  menuChanged(product) {
    if (this.menu.num === 0) {
     // this.productRemoved.emit(this.product)
    }
 }
}
