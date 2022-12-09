import { Injectable } from '@angular/core';
import { Product } from 'src/assets/data/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<{product: Product, quantity: number}>;

  constructor() {
    const productsFromLS = localStorage.getItem('cart');
    productsFromLS ? this.cart = JSON.parse(productsFromLS) : this.cart = [];
  }

  addInCart(product: Product) { 
    const index = this.cart.findIndex(p => p.product.id === product.id)
    index === -1 ? this.cart.push({ product: product, quantity: 1 }) : this.cart[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeFromCart(product: Product) {
    this.cart = this.cart.filter(p => p.product.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  incrementQuantity(product: Product) {
    const index = this.cart.findIndex(p => p.product.id === product.id)
    this.cart[index].quantity++;
  }

  decrementQuantity(product: Product) {
    const index = this.cart.findIndex(p => p.product.id === product.id);
    this.cart[index].quantity--;
  }
}
