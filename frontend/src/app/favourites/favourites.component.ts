import { Component } from '@angular/core';
import MOTORCYCLES from "./motorcycle-data";

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {
  motorcycles = MOTORCYCLES;
}
