import { Component } from '@angular/core';
import { GerantService } from '../services/gerant-service.service';
import { Facture } from '../models/facture'; // Import the Facture model
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  users: any[] = [];
  factures: Facture[] = []; // Array to hold Facture objects

  constructor(private gerantService: GerantService) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllFactures(); // Fetch factures as well
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
        }
      );
  }

  getAllFactures(): void {
    this.gerantService.getAllFactures() // Assuming you have a service method to fetch factures
      .subscribe(
        (data: Facture[]) => {
          this.factures = data;
          console.log(this.factures);
        }
      );
  }
}
