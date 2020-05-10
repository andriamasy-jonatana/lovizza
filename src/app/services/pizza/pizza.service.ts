import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import Pizza from '../models/Pizza';
import iPizza from '../models/iPizza';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable()

export class PizzaService {

    constructor(private http: HttpClient) { }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`);
        }
        return throwError('Something bad happened; please try again later.');
    }

    private extractData(res: Response) {
        let body = res;
        return body || { };
    }

    getPizzas(): Observable<any> {
        return this.http.get('https://api.ynov.jcatania.io/pizza', httpOptions)
          .pipe(
            map(this.extractData),
            catchError(this.handleError)
          );
    }

    getPizzaById(pizzaId: number) {
        // détails d'une pizza
    }
}
