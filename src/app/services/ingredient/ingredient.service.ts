import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import Ingredient from '../../models/ingredient/Ingredient';
import iIngredient from '../../models/ingredient/iIngredient';
import {map} from 'rxjs/operators';

@Injectable()

export class IngredientService {

  constructor(private http: HttpClient) { }

  /**
   * List of all ingredients
   *
   * @return JSON
   */
  getIngredients(): Observable<any> {
    return this.http.get('https://api.ynov.jcatania.io/ingredient');
  }

  /**
   * Show one ingredient
   *
   * @param id
   * @return JSON
   */
  getIngredientById(id: string): Observable<Ingredient> {
    return this.http.get<iIngredient>('https://api.ynov.jcatania.io/ingredient/' + id)
      .pipe(
        map(value => {
          if (value) {
            return value;
          } else {
            throw new Error('Aucun ingrédient trouvé');
          }
        })
      );
  }

  /**
   * Create ingredient
   *
   * @param ingredient
   * @return JSON
   */
  addIngredient(ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>('https://api.ynov.jcatania.io/ingredient', ingredient);
  }

  /**
   * Modify one ingredient
   *
   * @param ingredient
   * @return JSON
   */
  updateIngredient(ingredient) {
    // return this.http.put(url + id);
  }

  /**
   * Delete one ingredient
   *
   * @param id
   * @return JSON
   */
  deleteIngredient(id: string) {
    return this.http.delete('https://api.ynov.jcatania.io/ingredient/' + id);
  }
}
