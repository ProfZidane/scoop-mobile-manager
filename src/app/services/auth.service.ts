import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginURL = environment.endPoint + 'login';
  logoutURL = environment.endPoint + 'logout';
  constructor(private http: HttpClient) { }

  GetHeaders() {
    if (localStorage.getItem('mobile-token') !== null) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, PATCH',
        Authorization: 'Bearer ' + localStorage.getItem('mobile-token')
      });
      return headers;
    }
  }

  Login(data): Observable<any> {
    return this.http.post(this.loginURL, data);
  }

  Logout() {
    if (localStorage.getItem('mobile-token') !== null) {
      this.http.post(this.logoutURL, { headers: this.GetHeaders() });
      localStorage.removeItem('mobile-token');
      localStorage.removeItem('userData');
      return true;
    } else {
      return false;
    }
  }
}
