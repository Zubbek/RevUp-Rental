// category.service.ts

import { Injectable } from '@angular/core';
import axios from 'axios';
import {environment} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  async getCategories() {
    const options = {
      method: 'GET',
      url: 'https://motorcycle-specs-database.p.rapidapi.com/category',
      headers: {
        'X-RapidAPI-Key': environment.rapidApiKey,
        'X-RapidAPI-Host': environment.rapidApiHost
      }
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getModels(category: string) {
    const options = {
      method: 'GET',
      url: 'https://motorcycle-specs-database.p.rapidapi.com/model/make-id/493/2023/' + category,
      headers: {
        'X-RapidAPI-Key': environment.rapidApiKey,
        'X-RapidAPI-Host': environment.rapidApiHost
      }
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error("error: ", error);
      return null;
    }
  }

  async getSpecs() {
    const options = {
      method: 'GET',
      url: 'https://motorcycle-specs-database.p.rapidapi.com/article/804882',
      headers: {
        'X-RapidAPI-Key': environment.rapidApiKey,
        'X-RapidAPI-Host': environment.rapidApiHost
      }
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}


