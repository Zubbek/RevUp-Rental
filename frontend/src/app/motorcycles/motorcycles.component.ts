import {Component, OnInit} from '@angular/core';
import MOTORCYCLES from "./motorcycle-data";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../services/category/category.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-motorcycles',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './motorcycles.component.html',
  styleUrl: './motorcycles.component.css'
})
export class MotorcyclesComponent implements OnInit {
  categoryName: string = '';
  image: string = '';
  motorcycles: any[] = [];
  isCategoriesFetched: boolean = false;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  // ngOnInit(): void {
  //   if (!this.isCategoriesFetched) {
  //     this.route.params.subscribe(async params => {
  //       this.categoryName = params['categoryName'];
  //       console.log(this.categoryName)// Odczytaj nazwę kategorii z parametrów ścieżki
  //       this.motorcycles = await this.categoryService.getModels(this.categoryName);
  //       // for (const motorcycle of this.motorcycles) {
  //       //   // Sprawdź, czy articleID jest zdefiniowany
  //       //   if (motorcycle.articleID) {
  //       //     const image = await this.categoryService.fetchImage(motorcycle.articleID);
  //       //     if (image) {
  //       //       motorcycle.image = image; // Przypisz obrazek do pola image w obiekcie motorcycle
  //       //     }
  //       //   }
  //       // }
  //       this.image = await this.categoryService.fetchImage("804882")
  //       console.log(this.image)
  //       console.log(this.motorcycles);
  //       this.isCategoriesFetched = true;
  //     });
  //   }
  // }

  ngOnInit(): void {
    if (!this.isCategoriesFetched) {
      this.route.params.subscribe(async params => {
        this.categoryName = params['categoryName'];
        console.log(this.categoryName);// Odczytaj nazwę kategorii z parametrów ścieżki
        this.motorcycles = await this.categoryService.getModels(this.categoryName);

        // Zbierz wszystkie obrazki asynchronicznie
        const fetchImagePromises = this.motorcycles.map(async (motorcycle) => {
          if (motorcycle.articleID) {
            const image = await this.categoryService.fetchImage(motorcycle.articleID);
            console.log(image);
            if (image) {
              motorcycle.image = image; // Przypisz obrazek do pola image w obiekcie motorcycle
            }
          }
        });

        // Poczekaj na zakończenie wszystkich operacji fetchImage
        await Promise.all(fetchImagePromises);

        console.log(this.motorcycles);
        this.isCategoriesFetched = true;
      });
    }
  }
}
