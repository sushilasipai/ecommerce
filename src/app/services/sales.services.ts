import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class SaleService {
  constructor(private http: HttpClient) {}

  //get all sales
  getsaleList() {
    return this.http.get(`${environment.apiURL}/sale`);
  }

  //add new sale
  addsale(newsale) {
    let sale = {
      cust_name: newsale.cust_name,
      cust_contact: newsale.cust_contact,
      product: newsale.product,
      rate: newsale.rate,
      qty: newsale.qty,
      total: newsale.total,
      invoice_gen_flg: newsale.invoice_gen_flg,
    };
    let res = this.http.post(`${environment.apiURL}/sale`, {
      ...sale,
    });
    return res;
  }

  //update sale
  updatesale(newsale) {
    let sale = {
      cust_name: newsale.cust_name,
      cust_contact: newsale.cust_contact,
      product: newsale.product,
      rate: newsale.rate,
      qty: newsale.qty,
      total: newsale.total,
      invoice_gen_flg: newsale.invoice_gen_flg,
    };
    let res = this.http.post(
      `${environment.apiURL}/sale/update/` + newsale._id,
      {
        ...sale,
      }
    );
    return res;
  }

  //delete sale
  deletesale(newsale) {
    let res = this.http.post(
      `${environment.apiURL}/sale/delete/` + newsale._id,
      {}
    );
    return res;
  }

  //get sales whose invoice generation is pending
  getpendingsale() {
    return this.http.get(`${environment.apiURL}/sale/invoice`);
  }
}
