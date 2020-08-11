import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SaleService {
  constructor(private http: HttpClient) {}

  saleList = [
    {
      sale_id: 1,
      sale_customer_name: 'Ram Shakya',
      sale_customer_contact: 9888,
      sale_product: 'Apple',
      sale_qty: 30,
      sale_rate: 5,
      sale_total: 150,
    },
    {
      sale_id: 2,
      sale_customer_name: 'Shyam Pun',
      sale_customer_contact: 123,
      sale_product: 'Mango',
      sale_qty: 3,
      sale_rate: 5,
      sale_total: 15,
    },
    {
      sale_id: 3,
      sale_customer_name: 'Rama Jha',
      sale_customer_contact: 789,
      sale_product: 'Banana',
      sale_qty: 3,
      sale_rate: 15,
      sale_total: 45,
    },
  ];

  getsaleList() {
    return this.saleList;
  }

  getsaleById(id) {
    return this.saleList.filter((pid) => pid == id);
  }

  addsale(newsale) {
    this.saleList.push({
      sale_id: this.saleList.length + 1,
      sale_customer_name: newsale.sale_customer_name,
      sale_customer_contact: newsale.sale_customer_contact,
      sale_product: newsale.sale_product,
      sale_qty: newsale.sale_qty,
      sale_rate: newsale.sale_rate,
      sale_total: newsale.sale_total,
    });
    return this.saleList;
  }

  updatesale(newsale) {
    this.saleList.filter((value, key) => {
      if (value.sale_id == newsale.sale_id) {
        (value.sale_customer_name = newsale.sale_customer_name),
          (value.sale_customer_contact = newsale.sale_customer_contact),
          (value.sale_product = newsale.sale_product),
          (value.sale_qty = newsale.sale_qty),
          (value.sale_rate = newsale.sale_rate),
          (value.sale_total = newsale.sale_total);
      }
    });
    return this.saleList;
  }

  deletesale(newsale) {
    return this.saleList.filter((value, key) => {
      return value.sale_id != newsale.sale_id;
    });
  }
}
