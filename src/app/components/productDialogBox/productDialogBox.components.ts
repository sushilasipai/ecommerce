import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ProductData {
  product_id: number;
  product_name: string;
  product_rate: number;
  product_qty: number;
}

@Component({
  selector: 'app-dialogBox',
  templateUrl: './productDialogBox.components.html',
  styleUrls: ['./productDialogBox.components.css'],
})
export class ProductDialogBoxComponent {
  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<ProductDialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ProductData
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
