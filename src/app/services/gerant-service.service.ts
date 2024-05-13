import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GerantService {

  constructor(private http: HttpClient) { }

  addGerant(data: any): Observable<any> {
    const url = 'http://localhost:5000/user/register';
    return this.http.post<any>(url, data);
  }
  getAllUsers(): Observable<any[]> {
    const url = 'http://localhost:5000/user/getall';
    return this.http.get<any[]>(url);
  }
}
