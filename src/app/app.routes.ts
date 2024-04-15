import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {HomeComponent} from "./home/home.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {MotorcyclesComponent} from "./motorcycles/motorcycles.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  { path: '', component: LandingPageComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'motorcycles', component: MotorcyclesComponent}
];
