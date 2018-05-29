import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class RequisitionInterceptor implements HttpInterceptor {
	constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    const authReq = req.clone(
      {
        headers: req.headers.set('Content-Type', 'application/json')
      }
    );

    return next.handle(authReq);
  }
}
