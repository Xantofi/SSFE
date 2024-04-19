import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from 'src/app/Interfaces/iProduct';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  url = 'assets/data/products.json';

  private readonly products: BehaviorSubject<Producto[]> = new BehaviorSubject<
    Producto[]
  >([]);

  public products$ = this.products.asObservable();

  getProducts() {
    this.http.get<Producto[]>(this.url).subscribe({
      next: (productList) => {
        this.products.next(productList);
      },
      error: () => {
        this.handleError('getProduct', []);
      },
    });
  }

  addProduct(product: Producto) {
    this.products.subscribe((productList) => {
      productList.push(product);
    });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
