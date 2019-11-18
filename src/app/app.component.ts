
import { CardServiceService } from './card-service.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shoppers';
  cardService: CardServiceService;
  constructor(crdServiceService: CardServiceService) {
    this.cardService = crdServiceService;
  }
  getProductList() {
    return JSON.stringify(this.cardService.getShippingPrices());
  }
}
