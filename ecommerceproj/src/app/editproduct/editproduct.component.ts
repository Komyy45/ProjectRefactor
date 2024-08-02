import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent implements OnInit{
  product: Product | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
     this.product=this.productService.getProduct(id);
  }

  updateProduct(): void {
    if (this.product) {
      this.productService.updateProduct(this.product);
      this.router.navigate(['/product']);
    }
  }
}
