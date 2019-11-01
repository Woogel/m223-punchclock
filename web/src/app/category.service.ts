import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from './entries/entries.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('api/categories');
  }

  createCategory(category: Category): Observable<any> {
    return this.httpClient.post('api/categories', category);
  }
}
