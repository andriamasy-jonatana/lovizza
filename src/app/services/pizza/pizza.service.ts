import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import Pizza from '../../models/pizza/Pizza';
import iPizza from '../../models/pizza/iPizza';
import {map} from 'rxjs/operators';

@Injectable()

export class PizzaService {

    constructor(private http: HttpClient) { }

    /**
     * List of all pizzas
     *
     * @return JSON
     */
    getPizzas(): Observable<any> {
        return this.http.get('https://api.ynov.jcatania.io/pizza');
    }

    /**
     * Show one pizza
     *
     * @param id
     * @return JSON
     */
    getPizzaById(id: string): Observable<Pizza> {
        return this.http.get<iPizza>('https://api.ynov.jcatania.io/pizza/' + id)
          .pipe(
            map(value => {
                if (value) {
                    return value;
                } else {
                    throw new Error('Aucune pizza trouvé');
                }
            })
          );
    }

    /**
     * Create pizza
     *
     * @param pizza
     * @return JSON
     */
    addPizza(pizza) {
        // return this.http.post();
    }

    /**
     * Modify one ingredient
     *
     * @param pizza
     * @return JSON
     */
    updatePizza(pizza) {
        // return this.http.put(url + id);
    }

    /**
     * Delete one ingredient
     *
     * @param id
     * @return JSON
     */
    deletePizza(id: string) {
        return this.http.delete('https://api.ynov.jcatania.io/pizza/' + id);
    }
}
