import { Component } from '@angular/core';
import { Product } from '../products/models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      image: 'https://example.com/product1.jpg',
      name: 'Product 1',
      description: 'Description of Product 1',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/product1'
    },
    {
      image: 'https://example.com/product2.jpg',
      name: 'Product 2',
      description: 'Description of Product 2',
      rating: 4.0,
      link: 'https://kaspi.kz/shop/p/product2'
    },
    {
      image: 'https://example.com/product3.jpg',
      name: 'Product 3',
      description: 'Description of Product 3',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/product3'
    }
    // Добавь минимум 10 товаров
  ];

  share(product: Product) {
    const message = `Check this out: ${product.name} - ${product.link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
    
    window.open(whatsappUrl, '_blank'); // Открывает WhatsApp
    // window.open(telegramUrl, '_blank'); // Раскомментируй, если хочешь Telegram
  }
}