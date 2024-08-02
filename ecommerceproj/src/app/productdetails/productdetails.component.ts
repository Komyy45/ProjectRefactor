import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent  implements OnInit {
  constructor(private prodserv:ProductService,private route: ActivatedRoute){}
  product:Product|undefined;
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
   this.product= this.prodserv.getProduct(id)
      
   
  }

}
