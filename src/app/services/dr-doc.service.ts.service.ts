import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DrDocument } from '../models/dr-document.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DrDocService {
  getByComponent(selectedComponent: any) {
    throw new Error('Method not implemented.');
  }
    private baseUrl = environment.apiBaseUrl + '/api/dr';


  // private baseUrl = 'http://localhost:8082/api/dr';

  constructor(private http: HttpClient) {}

  getAll(): Observable<DrDocument[]> {
    return this.http.get<DrDocument[]>(this.baseUrl);
  }

  getById(id: any): Observable<DrDocument> {
    return this.http.get<DrDocument>(`${this.baseUrl}/${id}`);
  }

  getByCategory(category: string): Observable<DrDocument[]> {
    return this.http.get<DrDocument[]>(`${this.baseUrl}/category/${category}`);
  }

  create(doc: DrDocument): Observable<DrDocument> {
    return this.http.post<DrDocument>(this.baseUrl, doc);
  }

  update(id: number, doc: DrDocument): Observable<DrDocument> {
    return this.http.put<DrDocument>(`${this.baseUrl}/${id}`, doc);
  }

  deleteById(id: number) {
  return this.http.delete(`${this.baseUrl}/${id}`);
}

}
