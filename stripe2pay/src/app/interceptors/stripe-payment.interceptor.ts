import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class StripePaymentInterceptor implements HttpInterceptor {

  constructor() {}

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   return next.handle(request);
  // }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // alert('interceptor');
    return next.handle(req).pipe(map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
            event = event.clone({body: this.modifyBody(event.body)});
        }
        return event;
    }));

}

private modifyBody(body: any) {
    /*
    * write your logic to modify the body
    * */
   console.log('----body', body);
}
}
