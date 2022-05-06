import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {CalculService} from "../../services/calcul.service";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {
  listProduct: Product[];
  showFormTemplate: boolean;
  buttonValue: string;
  inputProduct: Product // the parent component will send this input to the child (formProduct)
  stockProduct: number;
  msg: string;
  constructor(private calcul: CalculService, private productService: ProductService) { }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.buttonValue="add new Product";
    this.productService.getListProductService().subscribe(
      (data)=> this.listProduct= data
    )
  }

  like(product: Product): void{
    let i = this.listProduct.indexOf(product);
    this.listProduct[i].nbrLike++
    //console.log(this.listProduct)
  }
  //the method save will check if is an update case or adding a new product case
  save(product: Product): void{
    let i = this.listProduct.indexOf(product);
    if(i!= -1){
      //update a product

      this.productService.updateProductService(product).subscribe(
        ()=>{this.listProduct[i]= product;
          this.showFormTemplate = false}
      )
    }
    else {
      //add a new product
      product.nbrLike=0;
      this.showFormTemplate = false
      this.productService.addProductService(product).subscribe(
        ()=>this.listProduct.push(product)
      )
      }
  }
  showForm(){
    if (this.showFormTemplate ===false){
      this.showFormTemplate = true
      this.buttonValue= "go Back to the List";
      this.inputProduct = new Product();
    }
    else {
      this.buttonValue="add new Product";
      this.showFormTemplate = false
    }
  }

  delete(product:Product): void{
    let i = this.listProduct.indexOf(product);
    this.productService.deleteProductService(product.id).subscribe(
      ()=>this.listProduct.splice(i,1)
    )
  }
  update(product: Product): void{
    //in order to update a product, the parent component will change the input value
    //and send it to the child component
    this.inputProduct = product;
    this.showFormTemplate = true;

  }
  getBilan(){
    this.stockProduct= this.calcul.getBilan(this.listProduct,'quantity',0);
  }
}
