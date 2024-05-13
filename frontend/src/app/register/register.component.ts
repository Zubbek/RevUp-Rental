import { Component } from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RegisterRequest} from "../services/models/register-request";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/services/authentication.service";
import {TokenService} from "../services/token/token.service";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerRequest: RegisterRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) {
  }
  register() {
    this.errorMsg = [];
    this.authService.register({
      body: this.registerRequest
    }).subscribe({
      next: () => {
        this.router.navigate(['login'])
        this.toastr.info("You Successfully Created an Account! Now you can Sign In :)", "Info", {
          timeOut: 5000
        });
      },
      error: (err) => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error.error);
        }
      }
    })
  }
}
