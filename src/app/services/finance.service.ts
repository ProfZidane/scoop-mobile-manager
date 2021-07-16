import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  validerURL = environment.endPoint + 'getFinancementEnAttente';
  validationURL = environment.endPoint + 'financement/validation/';
  fullURL = environment.endPoint + 'financement';
  full2URL = environment.endPoint + 'prefinancement';

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


  GetFinancement(): Observable<any> {
    return this.http.get(this.fullURL, { headers: this.GetHeaders() });
  }

  GetPrefinancement(): Observable<any> {
    return this.http.get(this.full2URL, { headers: this.GetHeaders() });
  }

  GetFinancementById(id): Observable<any> {
    return this.http.get(this.fullURL + '/' + id, { headers: this.GetHeaders() });
  }

  GetFinancementEnAttente(): Observable<any> {
    return this.http.get(this.validerURL, { headers: this.GetHeaders() });
  }

  setValidation(id): Observable<any> {
    return this.http.get(this.validationURL + id, { headers: this.GetHeaders() });
  }

}
