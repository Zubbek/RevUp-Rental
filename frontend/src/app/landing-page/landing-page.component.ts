import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/services/authentication.service";
import {TokenService} from "../services/token/token.service";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  constructor(
    private router: Router
  ) {
  }
  login() {
    this.router.navigate(['login'])
  }

  register() {
    this.router.navigate(['register'])
  }
}
