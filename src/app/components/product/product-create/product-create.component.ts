import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: any;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.product = {};
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Product Saved Successfully!');
      this.router.navigate(['/products'])
    });

  }

  cancelCreateProduct(): void {
    this.router.navigate(['/products'])
  }

}
