import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthSerService } from '../services/auth-ser.service';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  ngOnInit(): void {
    // Check if token exists in local storage
    const token = localStorage.getItem('token');
    if (token) {
      // Redirect to dashboard if token exists
      this.router.navigate(['/dashboard']);
    }
  }
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private authSerService:AuthSerService,private router: Router) {}

  login(): void {
    this.authSerService.login(this.email, this.password)
      .subscribe(
        (response) => {
          // Handle successful login response
          console.log('Login successful:', response.token);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
          // Redirect to dashboard or another page
        },
        (error) => {
          // Handle error response
          console.error('Login failed:', error);
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: error.error.message,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          });
        }
      );
  }
}