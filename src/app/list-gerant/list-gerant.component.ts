import { Component } from '@angular/core';
import { GerantService } from '../services/gerant-service.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-list-gerant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-gerant.component.html',
  styleUrl: './list-gerant.component.css'
})
export class ListGerantComponent {
  users: any[] = [];
  constructor(private gerantService: GerantService,private dialog: MatDialog,private router:Router) { }
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(): void {
    this.gerantService.getAllUsers()
      .subscribe(
        (data) => {
          this.users = data;
          console.log(this.users);
        },
       
        (error) => {
          console.error('Error fetching users:', error);
          // Handle error, such as displaying an error message to the user
        }
      );
  }
  confirmDelete(): Promise<boolean> {
    return Swal.fire({
      title: 'Confirm Delete',
      text: 'Are you sure you want to delete this item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      return result.isConfirmed;
    });
  }
  deleteUser(userId: string): void {
    this.confirmDelete().then((confirmed) => {
      if (confirmed) {
        // Proceed with delete
        this.gerantService.deleteUser(userId).subscribe(
          () => {
            console.log('User deleted successfully.');
            window.location.reload();
            // Optionally, you can perform additional actions after deletion.
          },
          (error) => {
            console.error('Error deleting user:', error);
            // Handle error, such as displaying an error message to the user.
          }
        );
      }
    });
  }
  navigateToUpdateGerant(gerantId: string): void {
    this.router.navigate(['/updategerant', gerantId]);
  }
  navigateToUpdatemessage(email: string,firstname: string,lastname: string): void {
    this.router.navigate(['/samplepage', email,firstname,lastname]);
  }
}