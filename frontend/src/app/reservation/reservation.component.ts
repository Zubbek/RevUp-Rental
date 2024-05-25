import {Component, OnInit} from '@angular/core';
import {MotorcycleControllerService} from "../services/services/motorcycle-controller.service";
import {ActivatedRoute, Router} from "@angular/router";
import { CommonModule } from '@angular/common';
import {MotorcycleDetailsModel} from "../services/models/motorcycle-details-model";
import {FavouritesControllerService} from "../services/services/favourites-controller.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserModel} from "../services/models/user-model";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {
  MatDatepickerModule,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker
} from "@angular/material/datepicker";
import {range} from "rxjs";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-motorcycle',
  standalone: true,
  imports: [CommonModule, MatLabel, MatDateRangeInput, ReactiveFormsModule, MatDatepickerToggle, MatDateRangePicker,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,],

  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit{
  company: string | undefined;
  id: string | null | undefined;
  price: string | undefined;
  model: string | undefined;
  category: string | undefined;
  image: string | undefined;
  motorcycleDetails: MotorcycleDetailsModel | undefined;
  user: UserModel | undefined;

  constructor(private route: ActivatedRoute, private motorcycleService: MotorcycleControllerService, private favouritesService: FavouritesControllerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('Route param id:', this.id);

    const state = window.history.state;
    console.log('Received state:', state);

    if (state) {
      this.category = state.category;
      this.company = state.company;
      this.model = state.model;
      this.price = state.price;
      this.image = state.image;
    }
    if (this.id) {
      this.fetchMotorcycleDetails(Number(this.id));
    }
  }
  fetchMotorcycleDetails(id: number): void {
    this.motorcycleService.getMotorcycleSpecById({id}).subscribe(
      (data: MotorcycleDetailsModel) => {
        this.motorcycleDetails = data;
      },
      (error) => {
        console.error('Error fetching motorcycle details:', error);
      }
    );
  }

  addToFavourites(motorcycleId: number): void {
    this.favouritesService.addToFavourites({ motorcycleId }).subscribe({
      next: response => {
        this.showSuccess();
      },
      error: err => {
        if (err.status === 409) {
          this.showInfo();
        } else {
          console.error('Error adding to favourites:', err);
        }
      }
    });
  }
  showInfo() {
    this.toastr.info("Motorcycle is already in your favourites", 'Information', {
      timeOut: 5000,
    });
  }
  showSuccess() {
    this.toastr.success("Motorcycle added fo favourites :)", 'Information', {
      timeOut: 5000,
    });
  }
  protected readonly Number = Number;
  protected readonly range = range;
}
