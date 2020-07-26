import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecommerce';

  productCategoryList = [
    'Men',
    'Women',
    'Children',
    'Home & Decor',
    'Beauty & Living',
  ];
}
