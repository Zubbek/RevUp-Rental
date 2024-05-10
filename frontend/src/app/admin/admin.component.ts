import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {UserControllerService} from "../services/services/user-controller.service";
import {UserModel} from "../services/models/user-model";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {UpdateUser$Params} from "../services/fn/user-controller/update-user";
import {DeleteUser$Params} from "../services/fn/user-controller/delete-user";
import {timeout, timestamp} from "rxjs";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  users: UserModel[] | undefined;

  constructor(
    private userService: UserControllerService, private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data: UserModel[]) => {
      this.users = data;
      console.log(data);
    });
  }
  lockAccount(email: string | undefined): void {
    if (email) {
      const params: UpdateUser$Params = {
        body: {
          email: email
        }
      };
      this.userService.updateUser(params).subscribe(() => {
        console.log("Lock account for user: ", email);
        this.showSuccess();
      });
    } else {
      console.error("Email is undefined!");
      this.showError();
    }
  }
  deleteUser(email: string | undefined): void {
    if (email) {
      const params: DeleteUser$Params = {
        body: {
          email: email
        }
      };
      this.userService.deleteUser(params).subscribe(() => {
        console.log("Delete user: ", email);
        this.showSuccess();
      });
    } else {
      console.error("Email is undefined!");
      this.showError();
    }
  }

  showSuccess() {
    this.toastr.success('Operation ended successful', 'Notofication', {
      timeOut: 3000,
    });
  }

  showError() {
    this.toastr.error('Operation ended with ERROR', 'Error', {
      timeOut: 3000,
    });
  }
}
