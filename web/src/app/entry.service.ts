import {Injectable} from '@angular/core';
import {Entry} from './entries/entries.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private httpClient: HttpClient) {
  }

  getEntries(): Observable<Entry[]> {
    return this.httpClient.get<Entry[]>('api/entries');
  }

  createEntry(entry: Entry): Observable<any> {
    return this.httpClient.post('api/entries', entry);
  }

  deleteEntry(id: number) {
    return this.httpClient.delete('api/entries/' + id);
  }

  updateEntry(entry: Entry): Observable<any> {
    return this.httpClient.put('api/entries', entry);
  }
}
