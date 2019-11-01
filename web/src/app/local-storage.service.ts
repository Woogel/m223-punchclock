import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  writeAuthToken(token: string) {
    localStorage.setItem('jwt-token', JSON.stringify(token));
  }

  getAuthToken(): string {
    return JSON.parse(localStorage.getItem('jwt-token'));
  }

  clear(): void {
    localStorage.clear();
  }
}
