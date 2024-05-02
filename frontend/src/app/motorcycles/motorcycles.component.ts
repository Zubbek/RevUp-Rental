import {Component, OnInit} from '@angular/core';
import MOTORCYCLES from "./motorcycle-data";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../services/category/category.service";

@Component({
  selector: 'app-motorcycles',
  standalone: true,
  imports: [],
  templateUrl: './motorcycles.component.html',
  styleUrl: './motorcycles.component.css'
})
export class MotorcyclesComponent implements OnInit {
  categoryName: string = '';
  motorcycles: any[] = [];

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      this.categoryName = params['categoryName'];
      console.log(this.categoryName)// Odczytaj nazwę kategorii z parametrów ścieżki
      this.motorcycles = await this.categoryService.getModels(this.categoryName);
      console.log(this.motorcycles);
    });
  }
}
