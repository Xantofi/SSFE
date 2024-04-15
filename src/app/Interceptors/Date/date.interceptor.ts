import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import * as moment from 'moment';

@Injectable()
export class DateInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        next: (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            const newBody = event.body;
            this.convertToDate(newBody);
          }
        },
        error: (err: any) => {
          console.error(err);
        },
      })
    );
  }
  convertToDate(newBody: object | null) {
    if (typeof newBody === 'object' && newBody !== null) {
      const casted = newBody as { [key: string]: unknown };
      for (const prod of Object.keys(casted)) {
        const product = casted[prod];
        if (typeof product === 'string' && prod === 'date') {
          const newDate = moment(product).format('DD/MM/YYYY hh:mm');
          casted[prod] = newDate;
        } else if (typeof product === 'object' && product !== null) {
          this.convertToDate(product);
        }
      }
      return null;
    } else {
      return newBody;
    }
  }
}
