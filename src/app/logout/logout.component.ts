import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  ngOnInit(): void {
    // Check if token exists in local storage
    localStorage.clear()
      // Redirect to dashboard if token exists
      this.router.navigate(['/login']);
    
  }
  constructor(private router:Router) { }
}
