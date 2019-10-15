import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/stocks';

  constructor(private http: HttpClient) { }

  getStock(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createStock(stock: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, stock);
  }

  updateStock(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteStock(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getStocksList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
