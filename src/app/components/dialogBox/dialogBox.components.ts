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
  templateUrl: './dialogBox.components.html',
  styleUrls: ['./dialogBox.components.css'],
})
export class DialogBoxComponent {
  action: string;
  local_data: any;
  updated_product_name: string;
  updated_product_qty: number;
  updated_product_rate: number;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
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
    /*console.log(this.updated_product_name);
    console.log(this.updated_product_qty);
    console.log(this.updated_product_rate);*/
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
