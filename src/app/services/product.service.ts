import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url= environment.url+"products/"
  constructor(private http: HttpClient) { }

  getListProductService(){
      return this.http.get<Product[]>(this.url);
  }
  addProductService(product:Product){
    return this.http.post(this.url, product);
  }
  deleteProductService(id:string){
    return this.http.delete(this.url+id)
  }
  updateProductService(product: Product){
    return this.http.put(this.url+product.id, product);
  }
  findProductByIdService(id: string){}
}
