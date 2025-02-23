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
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/p69/8929737.jpeg?format=preview-large',
      name: 'Сортер Набор развивающих игрушек дерево',
      description: '2 481 ₸',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/sorter-nabor-razvivajuschih-igrushek-derevo-108447545/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h37/h5c/84670928420894.jpg?format=preview-large',
      name: 'Трусики BAFURI XL, 5, 42 шт',
      description: '3 809 ₸',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/trusiki-bafuri-xl-5-42-sht-115199086/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3a/p6f/7243034.jpg?format=preview-large',
      name: 'Gerber чернослив 80 г',
      description: '624 ₸',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/gerber-chernosliv-80-g-19800057/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h34/80721531830302.jpg?format=preview-large',
      name: 'Обучающий набор Tilashar пластик, картон',
      description: '1 272 ₸',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/obuchajuschii-nabor-tilashar-plastik-karton-110318230/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8a/pe2/4968832.jpg?format=preview-large',
      name: 'Головоломка Фрукты и овощи, цвета, фигуры, машинки',
      description: '2 498 ₸',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/golovolomka-frukty-i-ovoschi-tsveta-figury-mashinki-ryby-tsifry-karton-116422441/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p09/pee/18074256.jpeg?format=preview-large',
      name: 'Агуша Мультифрукт 90 г',
      description: '279 ₸',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/agusha-mul-tifrukt-90-g-100623461/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/hfd/64137582706718.jpg?format=preview-large',
      name: 'Детская вода ФрутоНяня питьевая, негазированная 0.33',
      description: '298 ₸',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/detskaja-voda-frutonjanja-pit-evaja-negazirovannaja-0-33-l-101052206/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h18/hec/68019899269150.jpg?format=preview-large',
      name: 'Планшет MagPad LCD 846906 розовый',
      description: '418 ₸',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/planshet-magpad-lcd-846906-rozovyi-108501451/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/h14/64123238187038.jpg?format=preview-large',
      name: 'Ушастый нянь Крем-мыло Алоэ вера-подорожник 90 гр',
      description: '249 ₸',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/ushastyi-njan-krem-mylo-aloe-vera-podorozhnik-90-gr-100974038/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h68/h59/64130713354270.jpg?format=preview-large',
      name: 'Мяч Sobebear Тактильные мячики мультиколор',
      description: '727 ₸',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/mjach-sobebear-taktil-nye-mjachiki-mul-tikolor-103435487/?c=750000000'
    },
  ];

  share(product: Product) {
    const message = `Check this out: ${product.name} - ${product.link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
    window.open(whatsappUrl, '_blank'); 
    window.open(telegramUrl, '_blank'); 
  }
}