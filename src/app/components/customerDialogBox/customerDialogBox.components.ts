import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface CustomerData {
  _id: number;
  name: string;
  address: number;
  contact: number;
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

  //close dialog box after dialog box submit
  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  //close dialog box after dialog box cancel
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
