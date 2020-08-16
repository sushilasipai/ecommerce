import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface SaleData {
  _id: number;
  cust_name: string;
  cust_contact: number;
  product: string;
  qty: number;
  rate: number;
  total: number;
  invoice_gen_flg: boolean;
}

@Component({
  selector: 'app-dialogBox',
  templateUrl: './saleDialogBox.components.html',
  styleUrls: ['./saleDialogBox.components.css'],
})
export class SaleDialogBoxComponent {
  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<SaleDialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: SaleData
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  //calculate total cost
  calculateTotal() {
    this.local_data.total = this.local_data.qty * this.local_data.rate;
  }

  //close dialog box after submit
  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  //close dialog box after cancel
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
