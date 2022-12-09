import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum Menu {
  MY_SHOP = "My Shop",
  CART = "Cart",
  PROFILE = "Profile",
}

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menus = [
    { menu: Menu.MY_SHOP, url: "/my-shop" },
    { menu: Menu.CART, url: "/cart" },
    { menu: Menu.PROFILE, url: "profile" }
  ];

  @Input() selectedMenu!: Menu;
  @Output() changeMenu = new EventEmitter<Menu>();

  selectMenu = (menu: Menu) => {
    this.changeMenu.emit(menu);
  }
}
