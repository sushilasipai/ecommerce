import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { normalizePassiveListenerOptions } from '@angular/cdk/platform';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  productList = [
    {
      product_id: 1,
      product_name: 'Apple',
      product_rate: 30,
      product_qty: 5000,
    },
    {
      product_id: 2,
      product_name: 'Mango',
      product_rate: 60,
      product_qty: 8000,
    },
    {
      product_id: 3,
      product_name: 'Banana',
      product_rate: 40,
      product_qty: 900,
    },
  ];

  getProductList() {
    return this.productList;
  }

  getProductByName(searchName) {
    return this.productList.filter((name) =>
      name.product_name.toLowerCase().includes(searchName.toLowerCase())
    );
  }

  addProduct(newProduct) {
    this.productList.push({
      product_id: this.productList.length + 1,
      product_name: newProduct.product_name,
      product_rate: newProduct.product_rate,
      product_qty: newProduct.product_qty,
    });
    return this.productList;
  }

  updateProduct(newProduct) {
    this.productList.filter((value, key) => {
      if (value.product_id == newProduct.product_id) {
        value.product_name = newProduct.product_name;
        value.product_qty = newProduct.product_qty;
        value.product_rate = newProduct.product_rate;
      }
    });
    return this.productList;
  }

  deleteProduct(newProduct) {
    return this.productList.filter((value, key) => {
      return value.product_id != newProduct.product_id;
    });
  }
}
