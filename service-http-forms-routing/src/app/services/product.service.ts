import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[] =[];

  constructor() {

    this.products[0] = new Product(1,"iPhone", 75000, "Great Phone", true, 'images/iphone.jpeg');
    this.products[1] = new Product(2,"Nokia", 5000, "Simple Phone", true, 'images/Nokia.jpeg');
    this.products[2] = new Product(3,"Samsung", 15000, "Good Phone", true, 'images/Samsung.jpeg');
    this.products[3] = new Product(4,"Motorola", 25000, "Nice Phone", false, 'images/Motorola.jpeg');   

   }

   getAllProducts():Product[]{
    return this.products;
   }
}