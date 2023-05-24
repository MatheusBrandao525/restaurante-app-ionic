import { Category } from './../../models/category.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent {
  @Input() item!: Category;

  @Output() clicked = new EventEmitter();
}
