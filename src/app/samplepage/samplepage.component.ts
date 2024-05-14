import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-samplepage',
  standalone: true,
  imports: [RouterOutlet, RouterLink,FormsModule],
  templateUrl: './samplepage.component.html',
  styleUrl: './samplepage.component.css'
})
export class SamplepageComponent {
  formData: any = {};
  email!:string;
  username!:string;
  message!:string;
  constructor(private route: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    // Retrieve the user ID from the route parameter
    this.route.params.subscribe(params => {
      this.email = params['email'];
      this.username = params['firstname']+" "+params['lastname'];
      // Call the UserService to get the user by ID
 
    });
  }

}