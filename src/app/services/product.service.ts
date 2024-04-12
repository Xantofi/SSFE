import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/iProduct';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  url = 'assets/data/products.json';

  getProducts() {
    return this.http.get<Producto[]>(this.url);
  }

  /* private readonly products: BehaviorSubject<Producto[]> = new BehaviorSubject<
    Producto[]
  >([]);

  public products$ = this.products.asObservable();

  getProducts(): void {
    this.http.get<Producto[]>(this.url).subscribe({
      next: (data) => {
        this.products.next(data);
      },
      error: (err) => {
        this.handleError('getProduct', []);
      },
    });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }*/
}
