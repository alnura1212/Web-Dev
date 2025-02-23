import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from "./products/products.component";
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  imports: [ProductsComponent, HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shop';
  categories = ['Игрушки', 'Подгузники', 'Питание', 'Гаджеты'];
}
