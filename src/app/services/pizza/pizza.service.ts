import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class PizzaService {

    constructor(private http: HttpClient) { }

    getPizzas(): Observable<any> {
        return this.http.get('https://api.ynov.jcatania.io/pizza');
    }

    getPizzaById(id: string): Observable<any> {
        return this.http.get('https://api.ynov.jcatania.io/pizza/' + id);
    }

    addPizza(pizza: any) {
        // return this.http.post(`${this.pizzaUrl}`, pizza);
    }

    updatePizza(pizza: any) {
        // return this.http.put(`${this.pizzaUrl}/${pizza.id}`, pizza);
    }

    deletePizza(id: string) {
        // return this.http.delete(Url + id);
    }
}
