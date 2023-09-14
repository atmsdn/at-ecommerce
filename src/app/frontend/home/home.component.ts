import { Component } from '@angular/core';
import { CategoryService } from '../services/category/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  categoryList: any[] = [];
  constructor(private category: CategoryService) {
    this.getCategoryList();
  }

  getCategoryList() {
    this.categoryList = this.category.getAllCategory();
  }
}
