import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customers.services';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomerDialogBoxComponent } from '../../components/customerDialogBox/customerDialogBox.components';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.pages.html',
  styleUrls: ['./customers.pages.css'],
  providers: [CustomerService],
})
export class CustomersComponent {
  customers: any[];
  searchString: string;
  originalCustomers: any[];

  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog
  ) {
    customerService.getcustomerList().subscribe((data: any) => {
      this.customers = data.customers;
      this.originalCustomers = this.customers;
    });
  }

  //search customer with name containing given string
  searchCustomer(event) {
    let val = event.target.value.toLowerCase();
    let filteredCustomers = this.originalCustomers.filter((c) => {
      return c.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.customers = filteredCustomers;
  }

  //open customer add/edit/delete dialog box
  openDialog(action, obj) {
    obj.action = action;
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'customer-dialogBox';
    dialogConfig.height = '550px';
    dialogConfig.width = '600px';
    dialogConfig.data = obj;
    const dialogRef = this.dialog.open(
      CustomerDialogBoxComponent,
      dialogConfig
    );

    //perform add/update/delete after customer dialog box submit
    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add') {
        this.customerService.addcustomer(result.data).subscribe((data: any) => {
          this.customers = [...this.customers, data.customer];
          this.originalCustomers = this.customers;
        });
      } else if (result.event == 'Update') {
        this.customerService
          .updatecustomer(result.data)
          .subscribe((data: any) => {
            this.customers.filter((value, key) => {
              if (value._id == result.data._id) {
                value.name = result.data.name;
                value.address = result.data.address;
                value.contact = result.data.contact;
              }
            });
            this.originalCustomers = this.customers;
          });
      } else if (result.event == 'Delete') {
        this.customerService
          .deletecustomer(result.data)
          .subscribe((data: any) => {
            this.customers = this.customers.filter((value, key) => {
              return value._id != result.data._id;
            });
            this.originalCustomers = this.customers;
          });
      }
    });
  }
}
