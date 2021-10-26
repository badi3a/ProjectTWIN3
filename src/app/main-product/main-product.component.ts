import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {
  listProduct: Product[];
  constructor() { }

  ngOnInit(): void {
    this.listProduct = [
      { id: '12',
        title: 'T-Shirt 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis',
        quantity: 10,
        price: 15,
        nbrLike: 0,
        picture: 'assets/t shirt 1.jpg'
      },
      { id: '12',
        title: 'T-Shirt 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis',
        quantity: 10,
        price: 25,
        nbrLike: 0,
        picture: 'assets/t shirt 2.jpg'
      },
      { id: '12',
        title: 'T-Shirt 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis',
        quantity: 0,
        price: 100,
        nbrLike: 0,
        picture: 'assets/t shirt 1.jpg'
      }
    ]
  }

  like(product: Product){
    let i = this.listProduct.indexOf(product);
    this.listProduct[i].nbrLike++
    console.log(this.listProduct)
  }
}
