import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface CustomerData {
  customer_id: number;
  customer_name: string;
  customer_address: number;
  customer_contact: number;
}

@Component({
  selector: 'app-dialogBox',
  templateUrl: './customerDialogBox.components.html',
  styleUrls: ['./customerDialogBox.components.css'],
})
export class CustomerDialogBoxComponent {
  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<CustomerDialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: CustomerData
  ) {
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
