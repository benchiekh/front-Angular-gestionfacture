import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { jwtDecode } from "jwt-decode";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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