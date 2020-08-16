import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.services';
import { ProductDialogBoxComponent } from 'src/app/components/productDialogBox/productDialogBox.components';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.pages.html',
  styleUrls: ['./products.pages.css'],
  providers: [ProductService],
})
export class ProductsComponent {
  products: any[];
  originalProducts: any[];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {
    //get all products
    productService.getProductList().subscribe((data: any) => {
      this.products = data.products;
      this.originalProducts = this.products;
    });
  }

  //search product with name containing given string
  searchProduct(event) {
    let val = event.target.value.toLowerCase();
    let filteredProducts = this.originalProducts.filter((c) => {
      return c.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.products = filteredProducts;
  }

  //open dialog box for add/edit/delete operation on products
  openDialog(action, obj) {
    obj.action = action;
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'product-dialogBox';
    dialogConfig.height = '550px';
    dialogConfig.width = '600px';
    dialogConfig.data = obj;
    const dialogRef = this.dialog.open(ProductDialogBoxComponent, dialogConfig);

    //perform add/edit/delete operation on product after dialog box submit
    dialogRef.afterClosed().subscribe((result) => {
      console.log('after dialog box closed');
      console.log(result.data);
      if (result.event == 'Add') {
        this.productService.addProduct(result.data).subscribe((data: any) => {
          this.products = [...this.products, data.product];
          this.originalProducts = this.products;
        });
      } else if (result.event == 'Update') {
        this.productService
          .updateProduct(result.data)
          .subscribe((data: any) => {
            this.products.filter((value, key) => {
              if (value._id == result.data._id) {
                value.name = result.data.name;
                value.rate = result.data.rate;
                value.qty = result.data.qty;
              }
            });
            this.originalProducts = this.products;
          });
      } else if (result.event == 'Delete') {
        this.productService
          .deleteProduct(result.data)
          .subscribe((data: any) => {
            this.products = this.products.filter((value, key) => {
              return value._id != result.data._id;
            });
            this.originalProducts = this.products;
          });
      }
    });
  }
}
