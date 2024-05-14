import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from '@angular/common/http';
import { HeaderGerantComponent } from './header-gerant/header-gerant.component';
import { jwtDecode } from "jwt-decode";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, HeaderComponent,HttpClientModule,HeaderGerantComponent]
})
export class AppComponent {
  ShowHeader = true;
  role=""
  username=""
  ngOnInit(): void {
    //get role from localstorge
    const token = localStorage.getItem('token');
    const dtoken = this.decodeToken(token!)
    this.role = dtoken.role

    console.log(this.role)
    console.log(dtoken);

    this.username=dtoken.firstname+" "+dtoken.firstname
    console.log(this.role)
 
  }


  decodeToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
  constructor(private router: Router) {
    // Assuming you have imported Router from '@angular/router'
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login' || event.url === '/') {
          this.ShowHeader = false;
          
        } else {
          this.ShowHeader = true;
        }
      }
    });
  }
 
  
}