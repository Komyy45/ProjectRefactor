import { Component,OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  constructor(private productService : ProductService,private router:Router){}

  productData : Product[]=[];

  ngOnInit(): void {
   this.productData= this.productService.getProducts()
    
  }
  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);
    this.productData = this.productData.filter(p => p.productid !== id);
  }
  getProductById(id:number):void{
    this.router.navigate(['/details', id]);

  }
  updateProduct(id:number):void{
    this.router.navigate(['/edit', id]);
  }
  addProduct():void{
    this.router.navigate(['/create'])
  }
}
