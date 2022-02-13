import { Component, OnInit } from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-check-out-dialog',
  templateUrl: './check-out-dialog.component.html',
  styleUrls: ['./check-out-dialog.component.scss']
})
export class CheckOutDialogComponent implements OnInit {

  constructor() { 
   
  }

  ngOnInit() {
    render(
      {
          id: "#paypalPayButton",
          currency: "USD",
          value: "100.0",
        
          onApprove: (details) => {
            alert("transaction success");
  
          }
      }
    );
  }

}
