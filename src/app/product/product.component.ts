import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()product : Product;
  @Output() notification = new EventEmitter<Product>();
  @Output() deleteNotifEvent = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {

  }
  notifierParent(){
     this.notification.emit(this.product)
  }
  deleteNotif(){
    this.deleteNotifEvent.emit(this.product)
  }

}
