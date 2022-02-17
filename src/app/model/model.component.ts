import { ProductDetails } from './../product-details';
import { ElementComponent } from './../element/element.component';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { CheckOutDialogComponent } from '../check-out-dialog/check-out-dialog.component';
import { CheckOutService } from '../check-out.service';
import { Subscription } from 'rxjs';
import { SharedServiceService } from '../shared-service.service';
import { CartProduct } from '../cart-product';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent  extends ElementComponent implements OnInit{

  // @Output() addedProduct = new EventEmitter();
  @Input() cartList: Array<ProductDetails>;
  cartTotalCount: number;
  closeResult: string;
  cos: CheckOutService
  buttonClickedSubscription: Subscription;
  ngOnInit() {
    this.buttonClickedSubscription =  this.sss.getButtonClicked().subscribe(()=> {
      this.cartTotalCount = CheckOutService.getTotalCartStatus();
    });
  }
  sss: SharedServiceService;


  

  constructor(private modalService: NgbModal, cos: CheckOutService, sss: SharedServiceService) {
    super();
    this.cartTotalCount = CheckOutService.getTotalCartStatus();
    this.cos = cos;
    this.sss = sss;
    
  }

  openV1(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open(content) {

    this.modalService.open(CheckOutDialogComponent, {
      beforeDismiss: () => {
        alert("before dismiss");
        return true;
      }
    }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  refreshCount() {
    this.cartTotalCount = CheckOutService.getTotalCartStatus();
  }

  ngOnDestroy(){
    alert("ngOnDestroy");
    this.buttonClickedSubscription.unsubscribe();
  }
}
