import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  //get all products
  getProductList() {
    return this.http.get(`${environment.apiURL}/product`);
  }

  //add new product
  addProduct(newProduct) {
    let product = {
      name: newProduct.name,
      rate: newProduct.rate,
      qty: newProduct.qty,
    };
    let res = this.http.post(`${environment.apiURL}/product`, {
      ...product,
    });
    return res;
  }

  //update product
  updateProduct(newProduct) {
    let product = {
      name: newProduct.name,
      rate: newProduct.rate,
      qty: newProduct.qty,
    };
    let res = this.http.post(
      `${environment.apiURL}/product/update/` + newProduct._id,
      {
        ...product,
      }
    );
    return res;
  }

  //delete product
  deleteProduct(newProduct) {
    let res = this.http.post(
      `${environment.apiURL}/product/delete/` + newProduct._id,
      {}
    );
    return res;
  }
}
