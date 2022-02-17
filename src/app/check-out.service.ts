import { Injectable } from '@angular/core';
import { ProductDetails } from './product-details';
import { CartProduct } from './cart-product';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {
  static getCartStatus(productId) : number{
    if (this.productMap.size == 0 ) {
        return 0;
    }

    if (this.productMap.has(productId)) {
        return  this.productMap.get(productId).products.length;
    }
    //throw new Error("Method not implemented.");
  }
 static productMap = new Map<String, CartProduct>();


  constructor() { }

 static addToCart(productDetails : ProductDetails) {
    let cp: CartProduct;
    if (!this.productMap.has(productDetails.productId)) {
      cp = new  CartProduct(productDetails)
      this.productMap.set(cp.productId, cp);

    } else {
      cp =  this.productMap.get(productDetails.productId); // it is by reference
      if (!cp.addProduct(productDetails)) {
          alert("product is not added into cart ");
      }
    }
   
  }
 
  static getTotalCartStatus(): number {
    let totalCartCount =0;
    for (let cp of this.productMap) {
      totalCartCount = totalCartCount +  cp[1].getProducts().length;
    }
    return totalCartCount;
  }


  static getTotalAmount(): number {
    let totalTotalAmount =0;
    for (let cp of this.productMap) {
       for (let p of  cp[1].getProducts()) {
        totalTotalAmount +=  p.currentPrice - p.discount ;
       }
    }
    return totalTotalAmount;
  }

  static clearAfterSuccess(): void {
    this.productMap = new Map<String, CartProduct>();
  }
}
