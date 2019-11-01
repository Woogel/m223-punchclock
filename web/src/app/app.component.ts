import {Component} from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private localStorageService: LocalStorageService, private route: Router) {
  }

  userLoggedIn(): boolean {
    const authToken = this.localStorageService.getAuthToken();
    if (authToken != null) {
      return authToken.length > 0;
    }
    return false;
  }

  submit() {
    this.route.navigate(['/log-in']);
  }

  logOut() {
    this.localStorageService.clear();
    this.route.navigate(['/log-in']);
  }
}
