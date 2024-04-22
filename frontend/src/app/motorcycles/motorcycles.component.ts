import { Component } from '@angular/core';
import MOTORCYCLES from "./motorcycle-data";

@Component({
  selector: 'app-motorcycles',
  standalone: true,
  imports: [],
  templateUrl: './motorcycles.component.html',
  styleUrl: './motorcycles.component.css'
})
export class MotorcyclesComponent {
  motorcycles = MOTORCYCLES;
}
