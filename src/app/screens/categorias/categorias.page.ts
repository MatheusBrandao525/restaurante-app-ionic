import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { Product } from 'src/app/models/product.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { FoodService } from 'src/app/services/food.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  foods: Food[] = [];
  products: Product[] = [];
  category: string;
  selectedProduct: any;
  isModalOpen: boolean = false;

  constructor(
    private categoriaService: CategoriaService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe({
      next: (res: any) => {
        let id: number = Number(res.id);
        this.products = this.productService.getCategory(id);
        this.category = this.categoriaService
          .getCategoria(id)
          ?.label.toUpperCase();
      },
    });
  }

  selectProduct(product: any) {
    this.selectedProduct = product;
    this.isModalOpen = true;
  }

  /*   setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  } */
}
