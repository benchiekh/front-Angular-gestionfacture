import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthSerService {

  constructor(private http: HttpClient) { 
   }
   login(email: string, password: string): Observable<any> {
    const url ="http://localhost:5000/user/login";
    const body = { email, password };
    return this.http.post(url,body);
  }
}
