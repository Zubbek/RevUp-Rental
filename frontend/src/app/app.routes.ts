import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {HomeComponent} from "./home/home.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {MotorcyclesComponent} from "./motorcycles/motorcycles.component";
import {FavouritesComponent} from "./favourites/favourites.component";
import {AdminComponent} from "./admin/admin.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'motorcycles/:category', component: MotorcyclesComponent },
  {path: 'favourites', component: FavouritesComponent},
  {path: 'admin', component: AdminComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
