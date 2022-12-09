import { Component } from '@angular/core';
import { Product, products } from 'src/assets/data/products';
import { CartService } from '../cart.service';

@Component({
  selector: 'my-shop',
  templateUrl: './my-shop.component.html',
  styleUrls: ['./my-shop.component.scss']
})
export class MyShopComponent {

  products: Product[] = products;

  constructor(private cartService: CartService) {}

  addInCart = (product: Product) => {
    this.cartService.addInCart(product)
  }

}
