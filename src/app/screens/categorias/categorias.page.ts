import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  foods: Food[] = [];
  category: string;

  constructor(
    private categoriaService: CategoriaService,
    private foodService: FoodService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe({
      next: (res: any) => {
        let id: number = Number(res.id);
        this.foods = this.foodService.getCategory(id);
        this.category = this.categoriaService.getCategoria(id)?.label.toUpperCase();
      }
    });
  }

}
