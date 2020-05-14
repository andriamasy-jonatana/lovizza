import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import Pizza from '../models/Pizza';
import iPizza from '../models/iPizza';

@Injectable()

export class PizzaService {

    constructor(private http: HttpClient) { }

    getPizzas(): Observable<any> {
        return this.http.get('https://api.ynov.jcatania.io/pizza');
    }

    getPizzaById(id: string, nom: string, prix: string, ingredients: [], photo: string): Observable<Pizza> {
        return this.http.get<iPizza>('https://api.ynov.jcatania.io/pizza/' + id)
          .pipe(
            map(value => {
                if (value) {
                    return value;
                } else {
                    throw new Error('Aucune Pizza trouvée');
                }
            }),
            map(value => new Pizza(value.id, value.nom, value.prix, value.ingredients, value.photo))
          );
    }
}
