import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {
  listProduct: Product[];
  showFormTemplate: boolean;
  constructor() { }

  ngOnInit(): void {
    this.showFormTemplate = false;
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
      },
      { id: '12',
        title: 'T-Shirt 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis',
        quantity: 100,
        price: 45,
        nbrLike: 5,
        picture: 'assets/t shirt 2.jpg'
      }
    ]
  }

  like(product: Product){
    let i = this.listProduct.indexOf(product);
    this.listProduct[i].nbrLike++
    //console.log(this.listProduct)
  }
  save(product: Product){
    this.listProduct.push(product);
    this.showFormTemplate = false
  }
  showForm(){
    this.showFormTemplate = !this.showFormTemplate;
    return this.showFormTemplate
  }
  delete(product:Product){
    let i = this.listProduct.indexOf(product);
    this.listProduct.splice(i,1);
  }
}
