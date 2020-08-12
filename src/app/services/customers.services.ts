import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  customerList = [
    {
      customer_id: 1,
      customer_name: 'Ram Shakya',
      customer_address: 'ktm',
      customer_contact: 5000,
    },
    {
      customer_id: 2,
      customer_name: 'Shyam Hona',
      customer_address: 'bkt',
      customer_contact: 8000,
    },
    {
      customer_id: 3,
      customer_name: 'maya thapa',
      customer_address: 'patan',
      customer_contact: 900,
    },
  ];

  getcustomerList() {
    return this.customerList;
  }

  getCustomerByName(searchName) {
    return this.customerList.filter((name) =>
      name.customer_name.toLowerCase().includes(searchName.toLowerCase())
    );
  }

  addcustomer(newcustomer) {
    this.customerList.push({
      customer_id: this.customerList.length + 1,
      customer_name: newcustomer.customer_name,
      customer_address: newcustomer.customer_address,
      customer_contact: newcustomer.customer_contact,
    });
    return this.customerList;
  }

  updatecustomer(newcustomer) {
    this.customerList.filter((value, key) => {
      if (value.customer_id == newcustomer.customer_id) {
        value.customer_name = newcustomer.customer_name;
        value.customer_contact = newcustomer.customer_contact;
        value.customer_address = newcustomer.customer_address;
      }
    });
    return this.customerList;
  }

  deletecustomer(newcustomer) {
    return this.customerList.filter((value, key) => {
      return value.customer_id != newcustomer.customer_id;
    });
  }
}
