import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {MotorcycleDto} from "../models/motorcycle-dto";

@Injectable({
  providedIn: 'root'
})
export class MotorcycleService {

  constructor(private http: HttpClient) { }

  getMotorcyclesByCategory(): Observable<MotorcycleDto[]> {
    return this.http.get<MotorcycleDto[]>('/home'); // Tutaj podajesz ścieżkę do endpointu w twoim backendzie
  }
}
