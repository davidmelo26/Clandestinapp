import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  categories: Category[];

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.filterService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  filterBy(categoryId: string): void {

  }
}
