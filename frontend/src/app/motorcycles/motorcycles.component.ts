import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgForOf } from "@angular/common";
import { MotorcycleControllerService } from "../services/services/motorcycle-controller.service";
import { MotorcycleModel } from "../services/models/motorcycle-model";
import { GetMotorcyclesFromCategory$Params } from "../services/fn/motorcycle-controller/get-motorcycles-from-category";

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
  motorcycles: MotorcycleModel[] = [];
  category: string = '';

  constructor(private route: ActivatedRoute, private motorcycleService: MotorcycleControllerService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category')!;
      this.fetchMotorcycles();
    });
  }

  fetchMotorcycles(): void {
    if (this.category) {
      const paramsObj: GetMotorcyclesFromCategory$Params = { category: this.category };
      this.motorcycleService.getMotorcyclesFromCategory(paramsObj).subscribe(
        (data: MotorcycleModel[]) => {
          this.motorcycles = data;
        },
        (error) => {
          console.error('Error fetching motorcycles:', error);
        }
      );
    } else {
      console.error('Category parameter is missing');
    }
  }
}
