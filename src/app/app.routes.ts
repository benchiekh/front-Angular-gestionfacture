import { Title } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SamplepageComponent } from './samplepage/samplepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ListGerantComponent } from './list-gerant/list-gerant.component';
import { ArticleComponent } from './article/article.component';

export const routes: Routes = [
   {path: '', redirectTo: 'login', pathMatch: 'full'},
   { path:'dashboard', title:"dashbord page",component:DashboardComponent},
   { path:'samplepage', title:"Simple page",component:SamplepageComponent,},
   { path:'logout', title:"dashbord page",component:LogoutComponent},
   { path:'login', title:"login page",component:LoginComponent,},
   { path:'register', title:"register page",component:RegisterComponent,},
   { path:'listgerant', title:"listuser page",component:ListGerantComponent,},
   { path:'article', title:"article page",component:ArticleComponent,},
];
