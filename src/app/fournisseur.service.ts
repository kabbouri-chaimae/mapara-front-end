import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/fournisseurs';

  constructor(private http: HttpClient) { }

  getFournisseur(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createFournisseur(fournisseur: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, fournisseur);
  }

  updateFournisseur(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteFournisseur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getFournisseursList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
