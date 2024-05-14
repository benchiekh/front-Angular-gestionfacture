import { Component } from '@angular/core';
import { jwtDecode } from "jwt-decode";
@Component({
  selector: 'app-header-gerant',
  standalone: true,
  imports: [],
  templateUrl: './header-gerant.component.html',
  styleUrl: './header-gerant.component.css'
})
export class HeaderGerantComponent {
  ShowHeader = true;
  role=""
  username=""
  ngOnInit(): void {
    //get role from localstorge
    const token = localStorage.getItem('token');
    const dtoken = this.decodeToken(token!)
    this.role = dtoken.role
    console.log(dtoken)
    this.username=dtoken.email

 
  }
  decodeToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

}