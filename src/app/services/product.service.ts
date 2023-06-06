import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Product[] {
    return [
      {
        id: 1,
        title: 'Coxinhas',
        price: 6.99,
        image: 'assets/img/coxinhas.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 1,
      },
      {
        id: 1,
        title: 'Pastel',
        price: 7.99,
        image: 'assets/img/pastel.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 1,
      },
      {
        id: 1,
        title: 'Tapioca',
        price: 8.99,
        image: 'assets/img/tapioca.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 1,
      },
      {
        id: 1,
        title: 'Enrroladinho',
        price: 4.99,
        image: 'assets/img/enrroladinho.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 1,
      },
      {
        id: 1,
        title: 'X-Tudo',
        price: 18,
        image: 'assets/img/xtudo.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 1,
      },
      {
        id: 1,
        title: 'Strogonoff',
        price: 29.99,
        image: 'assets/img/strogonoff.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 2,
      },
      {
        id: 1,
        title: 'Batata Frita',
        price: 15,
        image: 'assets/img/batatafrita.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 2,
      },
      {
        id: 1,
        title: 'Peixe com Molho',
        price: 29.99,
        image: 'assets/img/peixecommolho.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 2,
      },
      {
        id: 1,
        title: 'Camarão',
        price: 14.99,
        image: 'assets/img/camaraopetisco.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 2,
      },
      {
        id: 1,
        title: 'Espetinho de Frutas',
        price: 12.99,
        image: 'assets/img/espetinho.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 2,
      },
      {
        id: 1,
        title: 'Frango à parmegiana',
        price: 40,
        image: 'assets/img/frango-parmegiana.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 3,
      },
      {
        id: 1,
        title: 'Peixe grelhado',
        price: 30,
        image: 'assets/img/peixe.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 3,
      },
      {
        id: 1,
        title: 'Costelinha de porco',
        price: 38.99,
        image: 'assets/img/costelinha.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 3,
      },
      {
        id: 1,
        title: 'Picanha assada',
        price: 35.99,
        image: 'assets/img/picanha.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 3,
      },
      {
        id: 1,
        title: 'Marmitex Pronta',
        price: 40,
        image: 'assets/img/marmitex.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 3,
      },
      {
        id: 1,
        title: 'Chocolate',
        price: 9.99,
        image: 'assets/img/chocolate.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 4,
      },
      {
        id: 1,
        title: 'Salada de Frutas',
        price: 29.99,
        image: 'assets/img/saladafrutas.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 4,
      },
      {
        id: 1,
        title: 'Sovete',
        price: 20,
        image: 'assets/img/sorvete.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 4,
      },
      {
        id: 1,
        title: 'Fatia de bolo',
        price: 12,
        image: 'assets/img/bolo.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 4,
      },
      {
        id: 1,
        title: 'Cupcake',
        price: 10,
        image: 'assets/img/cupcake.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 4,
      },
      {
        id: 1,
        title: 'Heineken',
        price: 15,
        image: 'assets/img/heineken.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 5,
      },
      {
        id: 1,
        title: 'Whisky Envelhecido',
        price: 70,
        image: 'assets/img/whiskyvelho.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 5,
      },
      {
        id: 1,
        title: 'Coquetel Artesanal',
        price: 20,
        image: 'assets/img/coquitel.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 5,
      },
      {
        id: 1,
        title: 'Vinho Tinto',
        price: 60,
        image: 'assets/img/vinho.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 5,
      },
      {
        id: 1,
        title: 'Champagne',
        price: 80,
        image: 'assets/img/champagne.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
        category: 5,
      },
    ];
  }

  getCategory(category: number): Product[] | undefined {
    return this.getProducts().filter(
      (product) => product.category === category
    );
  }
}
