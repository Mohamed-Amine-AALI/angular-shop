import { Component } from '@angular/core';
import { Product } from 'src/assets/data/products';
import { CartService } from '../cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  total: number = 0;
  
  constructor(private cartService: CartService) {
    this.calculateTotalPrice();
  }
  
  getCart = () => {
    return this.cartService.cart;
  }

  calculateTotalPrice = () => {
    this.cartService.cart.map(p => {
      this.total += Number(p.product.specifications.price.replace("$", ""))
    });
  }

  deleteProduct = (product: Product) => {
    this.cartService.removeFromCart(product);
    this.total -= Number(product.specifications.price.replace('$', ""));
  }

  incrementQuantity = (product: Product) => {
    this.cartService.incrementQuantity(product);
    this.total += Number(product.specifications.price.replace('$', ""));
  }

  decrementQuantity = (product: Product) => {
    this.cartService.decrementQuantity(product);
    this.total -= Number(product.specifications.price.replace('$', ""));
  }
}
