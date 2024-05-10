import { Component } from '@angular/core';
import {AuthenticationRequest} from "../services/models/authentication-request";
import {FormsModule} from "@angular/forms";
import {AuthenticationService} from "../services/services/authentication.service";
import {Router} from "@angular/router";
import {TokenService} from "../services/token/token.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthenticationService]
})
export class LoginComponent {

  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
  ) {
  }

  login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res) => {
        console.log("Odpowiedź z serwera:", res);
        this.tokenService.token = res.token as string;
        console.log("token: ", this.tokenService.token)
        const userRoles = this.tokenService.userRoles;
        if (userRoles.includes('ADMIN')) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        console.log("Błąd: ", err);
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error.error);
        }
      }
    });
  }
}
