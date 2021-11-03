import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-form-add-product',
  templateUrl: './form-add-product.component.html',
  styleUrls: ['./form-add-product.component.css']
})
export class FormAddProductComponent implements OnInit {
  @Input() product:Product;
  @Output() addEvent=new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }
  save(){
    this.addEvent.emit(this.product);
    this.product = new Product();
  }

}
