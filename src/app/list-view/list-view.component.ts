import { ProductDetails } from './../product-details';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Output() addedProduct = new EventEmitter();
  @Input()  products: Array<ProductDetails>;
/*
  notes = 'These Beefsteak Tomatoes in a 2-Pack offer a fresh flavor that complements a range of other food. They are greenhouse grown, providing you with a vibrant red color. These tomatoes are a good source of vitamin A. They can be used as an ingredient to';
  products: Array<ProductDetails> = new Array<ProductDetails>(new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['HGSL001_001.jpg'], 10, 1, 'test1', 'test2', this.notes, '3 days')
  , new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', this.notes, '3 days')
  , new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', this.notes, '3 days')
  , new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', this.notes, '3 days')
  , new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', this.notes, '3 days')
  , new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', this.notes, '3 days')
  , new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', this.notes, '3 days')
  , new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', this.notes, '3 days')
  , new ProductDetails('HGSL0001', '../../../assets/img/tomato_red.png', ['../../../assets/img/tomato_red.png'], 10, 1, 'test1', 'test2', this.notes, '3 days')
  );
  */
  constructor() { }

  ngOnInit() {
  }
  addToCart(product) {
    this.addedProduct.emit(product);
  }
}
