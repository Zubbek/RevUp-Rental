import { Component, OnInit } from '@angular/core';
import { NgForOf } from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import { MotorcycleModel } from "../services/models/motorcycle-model";
import { MotorcycleControllerService } from "../services/services/motorcycle-controller.service";
import {UserModel} from "../services/models/user-model";

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
  motorcycles: MotorcycleModel[] = [];
  recentlyAdded: MotorcycleModel[] = [];
  user: UserModel | undefined;

  constructor(private motorcycleService: MotorcycleControllerService, private router: Router) { }

  ngOnInit(): void {
    this.fetchMotorcycles();
  }

  fetchMotorcycles() {
    const storedMotorcycles = localStorage.getItem('motorcycles');

    if (storedMotorcycles) {
      const motorcycles = JSON.parse(storedMotorcycles) as MotorcycleModel[];
      this.handleMotorcyclesData(motorcycles);
    } else {
      this.motorcycleService.getMotorcyclesByCategory().subscribe(
        (data: MotorcycleModel[]) => {
          localStorage.setItem('motorcycles', JSON.stringify(data));
          this.handleMotorcyclesData(data);
        },
        (error) => {
          console.error('Error fetching motorcycles:', error);
        }
      );
    }
  }

  handleMotorcyclesData(data: MotorcycleModel[]) {
    const filteredMotorcycles = this.filterMotorcyclesByCategory(data);
    const recently = this.getRecentlyAdded(data);
    this.motorcycles = filteredMotorcycles;
    this.recentlyAdded = recently;
    console.log(filteredMotorcycles);
  }

  filterMotorcyclesByCategory(motorcycles: MotorcycleModel[]): MotorcycleModel[] {
    const categoryMap = new Map<string, MotorcycleModel>();

    motorcycles.forEach(motorcycle => {
      if (!categoryMap.has(motorcycle.category!)) {
        if (motorcycle.category != null) {
          categoryMap.set(motorcycle.category, motorcycle);
        }
      }
    });

    return Array.from(categoryMap.values());
  }

  private getRecentlyAdded(data: MotorcycleModel[]): MotorcycleModel[] {
    const storedRecentlyAdded = localStorage.getItem('recentlyAddedMotorcycles');
    if (storedRecentlyAdded) {
      return JSON.parse(storedRecentlyAdded);
    }

    const recentlyAdded = this.findRecentlyAdded(data);
    localStorage.setItem('recentlyAddedMotorcycles', JSON.stringify(recentlyAdded));
    return recentlyAdded;
  }

  private findRecentlyAdded(data: MotorcycleModel[]): MotorcycleModel[] {
    if (data.length < 3) {
      return data;
    }

    function getRandomInt(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    const result: MotorcycleModel[] = [];
    const usedIndices: Set<number> = new Set();
    while (result.length < 3) {
      const randomIndex = getRandomInt(0, data.length);
      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        result.push(data[randomIndex]);
      }
    }
    return result;
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
}
