import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.services';
import { DialogBoxComponent } from 'src/app/components/dialogBox/dialogBox.components';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.pages.html',
  styleUrls: ['./products.pages.css'],
  providers: [ProductService],
})
export class ProductsComponent {
  products: any[];
  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {
    this.products = productService.getProductList();
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'app-dialogBox';
    dialogConfig.height = '550px';
    dialogConfig.width = '600px';
    dialogConfig.data = obj;
    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('after dialog box closed');
      console.log(result.data);
      if (result.event == 'Add') {
        this.productService.addProduct(result.data);
      } else if (result.event == 'Update') {
        this.productService.updateProduct(result.data);
      } else if (result.event == 'Delete') {
        this.productService.deleteProduct(result.data);
      }
    });
  }
}
