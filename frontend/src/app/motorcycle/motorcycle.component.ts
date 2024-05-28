import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import { MotorcycleControllerService } from "../services/services/motorcycle-controller.service";
import {UserModel} from "../services/models/user-model";
import {MotorcycleDetailsModel} from "../services/models/motorcycle-details-model";
import {FavouritesControllerService} from "../services/services/favourites-controller.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-motorcycle',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgIf
  ],
  templateUrl: './motorcycle.component.html',
  styleUrl: './motorcycle.component.css'
})
export class MotorcycleComponent implements OnInit {
  company: string | undefined;
  id: string | null | undefined;
  price: number | undefined;
  model: string | undefined;
  category: string | undefined;
  image: string | undefined;
  motorcycleDetails: MotorcycleDetailsModel | undefined;
  user: UserModel | undefined;
  weekendPrice: number | undefined;
  weekPrice: number | undefined;
  monthPrice: number| undefined;

  constructor(private route: ActivatedRoute, private router: Router, private favouritesService: FavouritesControllerService, private motorcycleService: MotorcycleControllerService, private toastr: ToastrService) {
  }

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
    this.setPrice();
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

  makeReservation(motorcycleId: number): void {
    this.router.navigate([`/reservation/${motorcycleId}`], { state: { price: this.price } });
  }

  protected readonly Number = Number;

  setPrice(): void {
    this.weekendPrice = Number(this.price) * 3;
    this.weekendPrice = Math.round(this.weekendPrice - (this.weekendPrice * 0.05));
    this.weekPrice = Number(this.price) * 7;
    this.weekPrice = Math.round(this.weekPrice - (this.weekPrice * 0.08));
    this.monthPrice = Number(this.price) * 30;
    this.monthPrice = Math.round(this.monthPrice - (this.monthPrice * 0.12));
  }
}
