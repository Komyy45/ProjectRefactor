import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products:Array<Product> = [
    { productid: 1, productName: 'Product 1', ProductPrice: 10000,productQuantity:2,productImage:"./assets/fc2.png"  },
    { productid: 2, productName: 'Product 2', ProductPrice: 20000 ,productQuantity:4,productImage:"./assets/fc1.png" },
    { productid: 3, productName: 'Product 3', ProductPrice: 30000,productQuantity:6,productImage:"./assets/fc3.png" },
    { productid: 4, productName: 'Product 4', ProductPrice: 40000,productQuantity:10,productImage:"./assets/fc4.png" },
    { productid: 5, productName: 'Product 5', ProductPrice: 50000,productQuantity:14,productImage:"./assets/fc5.png" },
    { productid: 6, productName: 'Product 6', ProductPrice: 60000,productQuantity:18,productImage:"./assets/fc6.png" },
  ];

  getProducts() {
    return this.products;
  }
  addProduct(product: Product): void {
    this.products.push(product);
  }
  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(p => p.productid === updatedProduct.productid);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }
  getProduct(id: number): Product |undefined{
    return this.products.find(p => p.productid === id);
  }
  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.productid !== id);
  }
}
