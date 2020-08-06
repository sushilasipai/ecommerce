import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.services';
import { DialogBoxComponent } from 'src/app/components/dialogBox/dialogBox.components';
import { MatDialog } from '@angular/material/dialog';

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
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '550px',
      data: obj,
    });

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
