import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url= "http://localhost:3000/products/";
  constructor(private http: HttpClient) { }
  getListProductService(){
      return this.http.get<Product[]>(this.url);
  }
  addProductService(product:Product){}
  deleteProductService(id:string){}
  updateProductService(id: string, product: Product){}
  findProductByIdService(id: string){}
}
