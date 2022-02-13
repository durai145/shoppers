import { ProductDetails } from './../product-details';
import { ElementComponent } from './../element/element.component';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { CheckOutDialogComponent } from '../check-out-dialog/check-out-dialog.component';
import { resolve } from 'q';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent  extends ElementComponent implements OnInit {

  // @Output() addedProduct = new EventEmitter();
  @Input() cartList: Array<ProductDetails>;
  closeResult: string;
  ngOnInit() {
  }



  constructor(private modalService: NgbModal) {
    super();
    
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
}
