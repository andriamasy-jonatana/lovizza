import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http: HttpClient) { }

  getIngredients(): Observable<any> {
    return this.http.get('https://api.ynov.jcatania.io/ingredient');
  }

  getIngredientById(id: string): Observable<any> {
    return this.http.get('https://api.ynov.jcatania.io/ingredient/' + id);
  }

  addIngredient(ingredient: any) {
    // return this.http.post(`${this.ingredientUrl}`, ingredient);
  }

  updateIngredient(ingredient: any) {
    // return this.http.put(`${this.ingredientUrl}/${ingredient.id}`, ingredient);
  }

  deleteIngredient(id: string) {
    // return this.http.delete(Url + id);
  }
}
