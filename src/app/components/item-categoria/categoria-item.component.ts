import { Category } from '../../models/category.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './categoria-item.component.html',
  styleUrls: ['./categoria-item.component.scss'],
})
export class CategoriaItemComponent {
  @Input() item!: Category;

  @Output() clicked = new EventEmitter();
}
