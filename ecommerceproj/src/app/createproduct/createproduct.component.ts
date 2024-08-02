import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrl: './createproduct.component.css'
})
export class CreateproductComponent {
  product: Product = { productid: 0,productName:'', productImage: '', ProductPrice: 0,productQuantity:0 };

  constructor(private productService: ProductService, private router: Router) { }

  addProduct(): void {
    console.log(this.product);
    this.product.productid = Date.now(); // Use current timestamp as a simple ID generator
    this.productService.addProduct(this.product);
    this.router.navigate(['/product']);
}
}