import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../services/sales.services';
import { SaleDialogBoxComponent } from '../../components/saleDialogBox/saleDialogBox.components';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.pages.html',
  styleUrls: ['./sales.pages.css'],
  providers: [SaleService],
})
export class SalesComponent {
  sales: any[];
  invoiceFlg = false;

  constructor(private saleService: SaleService, private dialog: MatDialog) {
    //get all sales
    saleService.getsaleList().subscribe((data: any) => {
      this.sales = data.sales;
    });
  }

  //generate invoice
  genInvoice() {
    this.invoiceFlg = true;
    //shows only those sales whose invoice generation is pending
    this.saleService.getpendingsale().subscribe((data: any) => {
      this.sales = [...data.sales];
    });
  }

  //create new record in invoice table and update invoice_gen_flg field in sale table
  invoiceGenUpdate() {
    //call this.saleService.updatesale function for invoice_gen_flg update
  }

  //open dialog box for sales  add/edit/delete operation
  openDialog(action, obj) {
    obj.action = action;
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'sale-dialogBox';
    dialogConfig.height = '550px';
    dialogConfig.width = '600px';
    dialogConfig.data = obj;
    const dialogRef = this.dialog.open(SaleDialogBoxComponent, dialogConfig);

    //perform add/edit/delete operation on sale after dialog box submit
    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add') {
        this.saleService.addsale(result.data).subscribe((data: any) => {
          this.sales = [...this.sales, data.sale];
        });
      } else if (result.event == 'Update') {
        this.saleService.updatesale(result.data).subscribe((data: any) => {
          this.sales.filter((value, key) => {
            if (value._id == result.data._id) {
              value.cust_name = result.data.cust_name;
              value.cust_contact = result.data.cust_contact;
              value.sale = result.data.sale;
              value.rate = result.data.rate;
              value.qty = result.data.qty;
              value.total = result.data.total;
              value.invoice_gen_flg = result.data.invoice_gen_flg;
            }
          });
        });
      } else if (result.event == 'Delete') {
        this.saleService.deletesale(result.data).subscribe((data: any) => {
          this.sales = this.sales.filter((value, key) => {
            return value._id != result.data._id;
          });
        });
      }
    });
  }
}
