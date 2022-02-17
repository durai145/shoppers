import { Component, OnInit } from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments';
import { CheckOutService } from '../check-out.service';
import { CartProduct } from '../cart-product';
import { SharedServiceService } from '../shared-service.service';
import { SSL_OP_SINGLE_DH_USE } from 'constants';

@Component({
  selector: 'app-check-out-dialog',
  templateUrl: './check-out-dialog.component.html',
  styleUrls: ['./check-out-dialog.component.scss']
})
export class CheckOutDialogComponent implements OnInit {
  cos: CheckOutService;
  productMap: Map<String, CartProduct>;
  totalAmount: number;
  totalCartStatus: number;
  sss: SharedServiceService;

  constructor(cos: CheckOutService, sss: SharedServiceService) { 
   this.cos = cos;
   this.sss = sss;
   this.productMap = CheckOutService.productMap;
   this.totalCartStatus = CheckOutService.getTotalCartStatus();
   this.totalAmount = CheckOutService.getTotalAmount();
  }

  ngOnInit() {
    render(
      {
          id: "#paypalPayButton",
          currency: "USD",
          value: this.totalAmount + "",
        
          onApprove: (details) => {
            alert("transaction success");
            console.log(details);
            
            CheckOutService.clearAfterSuccess();
            this.sss.buttonClicked.next();
  
          }
      }
    );
  }

  
}
