import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GerantService } from '../services/gerant-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  firstname: string = '';
  lastname: string = '';
  telephone: string = '';
  email: string = '';
  password: string = '';
  constructor(private gerantService: GerantService) { }
  addGerant(): void {
    const gerantData = {
      firstname: this.firstname,
      lastname: this.lastname,
      telephone: this.telephone,
      email: this.email,
      password: this.password
    };

    this.gerantService.addGerant(gerantData)
    .subscribe(
      (response) => {
        console.log('Gerant added successfully:', response);
        Swal.fire({
          title: 'Success!',
          text: "Gerant added successfully",
          icon: 'success',
          confirmButtonText: 'OK'
        });
        // Optionally, you can perform additional actions after adding the gerant, such as showing a success message or navigating to another page.
      },
      (error) => {
        console.error('Error adding gerant:', error);
        // Handle error, such as displaying an error message to the user
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.error.message,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
      }
    );
    // Implement your logic to add the gerant
    console.log('Firstname:', this.firstname);
    console.log('Lastname:', this.lastname);
    console.log('Telephone:', this.telephone);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
