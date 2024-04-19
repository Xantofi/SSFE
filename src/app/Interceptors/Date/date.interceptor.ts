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
  private convertToDate(newBody: object | null) {
    if (typeof newBody === 'object' && newBody !== null) {
      const casted = newBody as { [key: string]: unknown };
      for (const key of Object.keys(casted)) {
        const value = casted[key];
        if (typeof value === 'string' && key === 'date') {
          const newDate = moment(value).format('DD/MM/YYYY hh:mm');
          casted[key] = newDate;
        } else if (typeof value === 'object' && value !== null) {
          this.convertToDate(value);
        }
      }
      return;
    } else {
      return newBody;
    }
  }
}
