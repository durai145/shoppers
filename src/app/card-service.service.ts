import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDetails } from './product-details';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {


  items: Array<ProductDetails>  = [];

  constructor(
    private http: HttpClient  ) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/mock/shipping.json');
  }
}
