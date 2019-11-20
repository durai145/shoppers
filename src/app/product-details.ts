export class ProductDetails {
    productId: string;
    imageId: string;
    slideShowImageIds: Array<string>;
    currentPrice: number;
    discount: number;
    shortDesc: string;
    detailDesc: string;
    notes: string;
    deliveryDuration: string;
    count: number;
    wieght: number;
    weightScale: string;
    rating: number;

    constructor(productId: string, imageId: string, slideShowImageIds: Array<string>, currentPrice: number, discount: number, shortDesc: string, detailDesc: string, notes: string, deliveryDuration: string) {
        this.productId = productId;
        this.imageId = imageId;
        this.slideShowImageIds = slideShowImageIds;
        this.currentPrice = currentPrice;
        this.discount = discount;
        this.shortDesc = shortDesc;
        this.detailDesc = detailDesc;
        this.notes = notes;
        this.deliveryDuration = deliveryDuration;
        this.count = 1;
        this.wieght = 10;
        this.weightScale = 'LB';
        this.rating = 3.4;
    }
}
