import { Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';




const appRoutes: Routes = [
{path: '' ,redirectTo: 'home', pathMatch:'full'},
// { path: 'login', loadChildren: () => import(`./modules/login-jwt/login-jwt.module`).then(m => m.LoginJwtModule)  },
{ path: 'home', component: HomeComponent },
{ path: '**', component: HomeComponent }

]