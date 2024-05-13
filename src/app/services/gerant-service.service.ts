import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GerantService {

  private apiUrl = 'http://localhost:5000/user/users';
  constructor(private http: HttpClient) { }

  addGerant(data: any): Observable<any> {
    const url = 'http://localhost:5000/user/register';
    return this.http.post<any>(url, data);
  }
  getAllUsers(): Observable<any[]> {
    const url = 'http://localhost:5000/user/getall';
    return this.http.get<any[]>(url);
  }
  deleteUser(userId: string): Observable<any> {
    const url = `http://localhost:5000/user/users/${userId}`;
    return this.http.delete<any>(url);
  }
  updateUser(userId: string, userData: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put(url, userData);
  }
  getUserById(userId: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }
}
