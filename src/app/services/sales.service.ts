import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  historyByDateURL = environment.endPoint + 'getHistoriqueAchats';
  sortByMonthURL = environment.endPoint + 'sortAchatByMonth';
  
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


  GetHistorySales2(data): Observable<any> {
    return this.http.post(this.historyByDateURL, data, { headers: this.GetHeaders() });
  }

  GetSalesByMonth(): Observable<any> {
    return this.http.get(this.sortByMonthURL, { headers: this.GetHeaders() });
  }
}
