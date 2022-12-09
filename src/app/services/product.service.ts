import { Injectable } from '@angular/core';

type ProductSpecifications = {
  color: string;
  weight: string;
  storage: string;
  price: string;
}
export type Product = {
  id: number;
  name: string;
  specifications: ProductSpecifications;
  pictureUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  products: Product[] = [
      {
        id: 1,
        name: "iPhone 12",
        specifications: {
          color: "black",
          weight: "250g",
          storage: "256GB",
          price: "1000$"
        },
        pictureUrl: "https://images.mobilefun.co.uk/graphics/450pixelp/74930.jpg"
      },
      {
        id: 2,
        name: "Airpods",
        specifications: {
          color: "white",
          weight: "50g",
          storage: "N/A",
          price: "200$"
        },
        pictureUrl: "https://fr.shopping.rakuten.com/photo/1938126227_L.jpg"
      },
      {
        id: 3,
        name: "Samsung S22",
        specifications: {
          color: "black",
          weight: "250g",
          storage: "512GB",
          price: "900$"
        },
        pictureUrl: "https://m.media-amazon.com/images/I/71xZgc0-MRL._AC_SS450_.jpg"
      },
      {
        id: 4,
        name: "Samsung Note 10",
        specifications: {
          color: "black",
          weight: "250g",
          storage: "256GB",
          price: "950$"
        },
        pictureUrl: "https://e-leclerc.scene7.com/is/image/gtinternet/8801643905361_4?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&wid=450&fit=fit,1&hei=450"
      },
      {
        id: 5,
        name: "Iphone 14",
        specifications: {
          color: "white",
          weight: "250g",
          storage: "256GB",
          price: "1300$"
        },
        pictureUrl: "https://cdn.lesnumeriques.com/optim/product/68/68765/e98c3816-iphone-14-pro-max__450_400.jpeg"
      }
    ]

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProductPrice(product: Product) {
    return Number(product.specifications.price.replace("$", ""))
  } 
}