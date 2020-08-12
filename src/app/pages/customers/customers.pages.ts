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

  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog
  ) {
    this.customers = customerService.getcustomerList();
  }

  searchCustomer() {
    console.log(this.searchString);
    this.customers = this.customerService.getCustomerByName(this.searchString);
    this.searchString = '';
  }

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

    dialogRef.afterClosed().subscribe((result) => {
      console.log('after dialog box closed');
      console.log(result.data);
      if (result.event == 'Add') {
        this.customers = this.customerService.addcustomer(result.data);
      } else if (result.event == 'Update') {
        this.customers = this.customerService.updatecustomer(result.data);
      } else if (result.event == 'Delete') {
        this.customers = this.customerService.deletecustomer(result.data);
      }
    });
  }
}
