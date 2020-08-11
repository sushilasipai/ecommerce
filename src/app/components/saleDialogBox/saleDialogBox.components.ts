import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface SaleData {
  sale_id: number;
  sale_customer_name: string;
  sale_customer_contact: number;
  sale_product: string;
  sale_qty: number;
  sale_rate: number;
  sale_total: number;
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
    console.log('data');
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  doAction() {
    console.log('inside doAction');
    console.log(this.local_data);
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
