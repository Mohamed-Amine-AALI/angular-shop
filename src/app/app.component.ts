import { Component } from '@angular/core';
import { Menu } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menus = Menu;
  selectedMenu = Menu.MY_SHOP;

  changeMenu = (menu: Menu) => {
    this.selectedMenu = menu;
  }
}
