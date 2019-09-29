import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/message.service';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private messageService: MessageService,
    private http: HttpClient) { }

    getCategories(): Observable<Category[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add('CategoryService: fetched categories');
      return this.http.get<Category[]>('/api/categories');
    }

    getCategoriesBySport(sportid: number): Observable<Category[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add(`CategoryService: fetched categories sportid=${sportid}`);
      return this.http.get<Category[]>(`/api/categories?sportid=${sportid}`);
    }

    getCategory(id: number): Observable<Category> {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`CategoryService: fetched category id=${id}`);
      return this.http.get<Category>(`/api/categories/${id}`);
    }

    updateCategory(category: Category) {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`CategoryService: update category id=${category.id}`);
      return this.http.put(`/api/categories/${category.id}`, category);
    }
}
