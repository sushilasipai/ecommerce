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
    this.sales = saleService.getsaleList();
  }

  invoiceFlgChange() {
    this.invoiceFlg = true;
  }

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

    dialogRef.afterClosed().subscribe((result) => {
      console.log('after dialog box closed');
      console.log(result.data);
      if (result.event == 'Add') {
        this.sales = this.saleService.addsale(result.data);
      } else if (result.event == 'Update') {
        this.sales = this.saleService.updatesale(result.data);
      } else if (result.event == 'Delete') {
        this.sales = this.saleService.deletesale(result.data);
      }
    });
  }
}
