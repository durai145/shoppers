import { ElementComponent } from './../element.component';
import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef, Output } from '@angular/core';
import { Link } from '../../link';
import { UtilsServiceService } from '../../utils-service.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})


export class MenuPanelComponent extends ElementComponent implements OnInit, AfterViewInit {
  @Input() inputJson: string;
  @Input() brandName: string;
  @Output() addedLink = new EventEmitter();
  @Output() addedProduct = new EventEmitter();
  @Input() cartList;
  @Input() listA: Array<Link>;
  menuItems: Array<Link>;
  constructor(private cdr: ChangeDetectorRef) {
    super();
   }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.menuItems = UtilsServiceService.jsonParse(this.inputJson);
    this.cdr.detectChanges();
  }

  addLink(link) {
    this.addedLink.emit(link);
  }
  addProduct(product) {
    this.addedProduct.emit(product);
  }
}
