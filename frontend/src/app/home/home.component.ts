import {Component, OnInit} from '@angular/core';
import Descriptions from "./descriptions";
import motorcycles from "../favourites/motorcycle-data";
import {CategoryService} from "../services/category/category.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  categories: any[] = [];
  isCategoriesFetched: boolean = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    if (!this.isCategoriesFetched) {
      this.fetchCategories();
    }
  }

  async fetchCategories() {
    const categoriesToRemove = ['ATV', 'Prototype-concept model', 'Custom-cruiser', 'Minibike-sport', 'Minibike-cross', 'Trial', 'Speedway', 'Allround'];
    this.categories = await this.categoryService.getCategories();
    this.categories = this.categories.filter(category => !categoriesToRemove.includes(category.name))
      .map(category => {
        const descriptionObj = Descriptions.find((desc: { name: any; }) => desc.name === category.name);
        const description = descriptionObj ? descriptionObj.description : '';
        return {
          ...category,
          description: description
        };
      })
      .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.isCategoriesFetched = true;
  }

  descriptions = Descriptions;
  protected readonly motorcycles = motorcycles;
}
