import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: any[] = [];
  constructor(private http: HttpClient) {}

  getCategories(){
    this.http.get('http://localhost:3000/category').subscribe((categories: any) =>{
      this.categories = [];
      for (const category of categories) {
        this.categories.push({
          id: category.id,
          name: category.name
        });
      }
    })
  }

  getCategory(id: any){
    this.http.get(`http://localhost:3000/category?id=${id}`).subscribe();
  }
}
