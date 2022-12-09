import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'my-shop',
  templateUrl: './my-shop.component.html',
  styleUrls: ['./my-shop.component.scss']
})
export class MyShopComponent {

  products: Product[];

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {
    this.products = this.productService.getProducts();
  }

  addInCart = (product: Product) => {
    this.cartService.addInCart(product)
  }

}
