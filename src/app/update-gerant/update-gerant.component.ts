import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GerantService } from '../services/gerant-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-gerant',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-gerant.component.html',
  styleUrl: './update-gerant.component.css'
})
export class UpdateGerantComponent {
  gerantId!: string;
  gerant: any;
  firstname: string = '';
  lastname: string = '';
  telephone: string = '';
  email: string = '';
  password: string = '';
  constructor(private gerantService: GerantService,private route: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    // Retrieve the user ID from the route parameter
    this.route.params.subscribe(params => {
      this.gerantId = params['id'];
      // Call the UserService to get the user by ID
      this.gerantService.getUserById(this.gerantId).subscribe(
        (gerant) => {
          this.gerant = gerant;
          this.firstname=gerant.firstname;
          this.lastname=gerant.lastname;
          this.email=gerant.email;
          this.telephone=gerant.telephone;


          console.log('User details:', this.gerant);
        },
        (error) => {
          console.error('Error fetching user:', error);
          // Handle error, such as displaying an error message to the user.
        }
      );
    });
  }


  updateUser(): void {
    const gerantData = {
      firstname: this.firstname,
      lastname: this.lastname,
      telephone: this.telephone,
      email: this.email,
    };
    // Call the service method to update the user
    this.gerantService.updateUser(this.gerantId,gerantData).subscribe(
      () => {
        console.log('User updated successfully.');
        Swal.fire({
          icon: 'success',
          title: 'User Updated',
          text: 'The user has been successfully updated.',
          confirmButtonText: 'OK'
        });
        this.router.navigate(['/listgerant']);
        // Optionally, navigate to another page or display a success message
      },
      (error) => {
        console.error('Error updating user:', error);
        Swal.fire({
          icon: 'error',
          title: 'upadate Failed',
          text: "failed",
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
        // Handle error, such as displaying an error message to the user.
      }
    );
  }
}

