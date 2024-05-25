import {Component, OnInit} from '@angular/core';
import {MotorcycleModel} from "../services/models/motorcycle-model";
import {FavouritesControllerService} from "../services/services/favourites-controller.service";
import {NgForOf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {UserModel} from "../services/models/user-model";

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent implements OnInit {
  favouriteMotorcycles: MotorcycleModel[] = [];
  noFavouritesMessage: string | null = null;

  constructor(private favouriteService: FavouritesControllerService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.loadFavourites();
  }

  loadFavourites(): void {
    this.favouriteService.getAllFavouriteMotorcyclesForCurrentUser().subscribe({
      next: (data: MotorcycleModel[]) => {
        this.favouriteMotorcycles = data;
        if (data.length === 0) {
          this.showInfo();
        }
      },
      error: (error) => {
        console.error('There was an error fetching the favourites!', error);
      }
    });
  }

  removeMotorcycleFromFavourites(id: number) {
    this.favouriteService.deleteMotorcycleFromFavourites({ id: id }).subscribe(
      response => {
        console.log('Motorcycle removed successfully:', response);
        this.favouriteMotorcycles = this.favouriteMotorcycles.filter(motorcycle => motorcycle.id !== id);
        this.showSuccess();
      },
      error => {
        console.error('Error removing motorcycle:', error);
        this.showError();
      }
    );
  }
  navigateToMotorcycle(motorcycle: MotorcycleModel) {
    console.log('Navigating with state:', {
      category: motorcycle.category,
      company: motorcycle.company,
      model: motorcycle.model,
      price: motorcycle.price,
      image: motorcycle.image
    });
    this.router.navigate(['/reservation', motorcycle.id], {
      state: {
        category: motorcycle.category,
        company: motorcycle.company,
        model: motorcycle.model,
        price: motorcycle.price,
        image: motorcycle.image
      }
    });
  }
  showSuccess() {
    this.toastr.success('Motorcycle removed successfully', 'Notification', {
      timeOut: 3000,
    });
  }

  showError() {
    this.toastr.error('Operation ended with ERROR', 'Error', {
      timeOut: 3000,
    });
  }

  showInfo() {
    this.toastr.info("Currently You don't have any motorcycles in your favourites :( ", 'Information', {
      timeOut: 5000,
    });
  }

  protected readonly Number = Number;
}
