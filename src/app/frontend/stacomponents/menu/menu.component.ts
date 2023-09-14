import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  categoryList: any[] = [];
  constructor(private category: CategoryService) {
    this.getCategoryList();
  }

  getCategoryList() {
    this.categoryList = this.category.getAllCategory();
  }
}
