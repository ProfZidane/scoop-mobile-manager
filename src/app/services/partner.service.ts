import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  getURL = environment.endPoint + 'partenaire';
  getByIdURL = environment.endPoint + 'partenaire/';

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

  GetPartners(): Observable<any> {
    return this.http.get(this.getURL, { headers: this.GetHeaders() });
  }

  GetPartnersById(id): Observable<any>{
    return this.http.get(this.getByIdURL + id, { headers: this.GetHeaders() });
  }
}
