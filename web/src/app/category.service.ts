import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Category, Entry} from './entry/entries.model';
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
}
