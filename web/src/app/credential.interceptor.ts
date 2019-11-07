import {Injectable} from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {LocalStorageService} from './local-storage.service';
import {Router} from '@angular/router';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable()
export class CredentialInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService, private router: Router) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = this.localStorageService.getAuthToken() ? this.localStorageService.getAuthToken() : '';
    request = request.clone({
      setHeaders: {
        Authorization: token
      }
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => event),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.router.navigate(['/log-in']);
          this.localStorageService.clear();
        }
        return throwError(error);
      }));
  }
}
