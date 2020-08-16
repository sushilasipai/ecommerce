import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  //get all customers
  getcustomerList() {
    return this.http.get(`${environment.apiURL}/customer`);
  }

  //add new customer
  addcustomer(newcustomer) {
    let customer = {
      name: newcustomer.name,
      address: newcustomer.address,
      contact: newcustomer.contact,
    };
    let res = this.http.post(`${environment.apiURL}/customer`, {
      ...customer,
    });
    return res;
  }

  //update customer by id
  updatecustomer(newcustomer) {
    let customer = {
      name: newcustomer.name,
      address: newcustomer.address,
      contact: newcustomer.contact,
    };
    let res = this.http.post(
      `${environment.apiURL}/customer/update/` + newcustomer._id,
      {
        ...customer,
      }
    );
    return res;
  }

  //delete customer by id
  deletecustomer(newcustomer) {
    let res = this.http.post(
      `${environment.apiURL}/customer/delete/` + newcustomer._id,
      {}
    );
    return res;
  }
}
