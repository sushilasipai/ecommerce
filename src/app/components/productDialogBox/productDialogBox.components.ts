import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ProductData {
  id: number;
  name: string;
  rate: number;
  qty: number;
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
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  //close dialog box on submit
  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  //close dialog box on cancel
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
