import { Component } from '@angular/core';
import { GerantService } from '../services/gerant-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-gerant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-gerant.component.html',
  styleUrl: './list-gerant.component.css'
})
export class ListGerantComponent {
  users: any[] = [];
  constructor(private gerantService: GerantService) { }
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
}

