import { ProductDetails } from './product-details';
import { ProductStandardViewComponent } from './product-standard-view/product-standard-view.component';
import { Address } from 'cluster';


export class CartProduct {
    
    productId: String;
    products: Array<ProductDetails>;
    shippingAddress: Address;

    constructor(product: ProductDetails) {
        this.products = new Array<ProductDetails>();
        this.products.push(product);
        this.productId = product.productId;
    }

    addProduct(product: ProductDetails): Boolean {
        if (this.productId == "") {
            this.products.push(product);
            return true;
        } else if(this.productId == product.productId) {

            this.products.push(product);
            return true;
        }
        // Amount or discount is different then dont group
        // group the cart only same product, same desription, discount, curreny  and Amount.
        // otherwise it will show as separate items.

        return false;

    }

    getAmount() : number {
        let amount: number;
       /* this.products.forEach(function (p) {
            amount = p.currentPrice + p.discount
        })*/
        for (var product of this.products) {
            amount = product.currentPrice + product.discount  
        }
        return amount;
    }

    getProducts(): Array<ProductDetails> {
        return this.products;
    }
    
    getProductId(): String {
        return this.productId;

    }
}
