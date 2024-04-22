import { Component } from '@angular/core';
import CATEGORIES from "./categories";
import motorcycles from "../favourites/motorcycle-data";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories = CATEGORIES;
  protected readonly motorcycles = motorcycles;
}
