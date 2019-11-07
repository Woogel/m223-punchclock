import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from './log-in/log-in.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  signUpUser(user: User): Observable<User> {
    return this.httpClient.post<User>('api/users/sign-up', user);
  }

  loginUser(user: User): Observable<any> {
    return this.httpClient.post<any>('api/login', user, {observe: 'response'});
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('api/users');
  }

  deleteUser(id: number) {
    return this.httpClient.delete('/api/users/' + id);
  }

  updateUser(result: UserService) {
    return this.httpClient.put('/api/users', result);
  }
}
