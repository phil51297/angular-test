import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() title: string = ''; 

  categories: any[]= this.categoryService.categories;
  filteredCategories: any[] = [];
  searchQuery: string = '';

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories();
    // .subscribe((categories: any[]) => {
    //   this.categories = categories;
    this.filteredCategories = this.categories;
    // });
    console.log(this.categories);
  }

  filterCategories(): void {
    this.filteredCategories = this.categories.filter((category: any)=>
      category.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  resetFilter(): void {
    this.searchQuery = '';
    this.filteredCategories = this.categories;
  }

  navigateToQuiz(categoryId: number): void {
    this.router.navigate(['/quiz', categoryId]);
  }
}