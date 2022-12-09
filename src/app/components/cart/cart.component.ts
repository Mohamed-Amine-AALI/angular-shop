import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  total: number = 0;
  
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {
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
    this.total -= this.productService.getProductPrice(product);
  }

  incrementQuantity = (product: Product) => {
    this.cartService.incrementQuantity(product);
    this.total += this.productService.getProductPrice(product);
  }

  decrementQuantity = (product: Product) => {
    this.cartService.decrementQuantity(product);
    this.total -= this.productService.getProductPrice(product);
  }
}
