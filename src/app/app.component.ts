import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from '@angular/common/http';
import { HeaderGerantComponent } from './header-gerant/header-gerant.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, HeaderComponent,HttpClientModule,HeaderGerantComponent]
})
export class AppComponent {
  ngOnInit(): void {
    //get role from localstorge
  }
  ShowHeader = true;
  role="Gerant"

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