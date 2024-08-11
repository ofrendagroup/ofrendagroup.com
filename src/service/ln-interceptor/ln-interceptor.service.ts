import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
//
// LnAuthenticationService
//
import { LnAuthenticationService } from '@service/ln-authentication/ln-authentication.service';

@Injectable()
export class LnInterceptorService implements HttpInterceptor {
  //
  // intercept
  //
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next;

    // return next.handle(request).pipe(
    //   tap((httpEvent: HttpEvent<any>) => {
    //     //
    //     // HttpRequest
    //     //
    //     if (httpEvent instanceof HttpRequest) {
    //       //
    //       // Set the Authorization Header
    //       // SDL: Temporary fix
    //       if (request.url.includes('https://dev.playbookorthopediatrics.com'))
    //       {
    //         if (this.authenticationService.hasToken()) {
    //           request = request.clone({
    //             setHeaders: {
    //               TimeZoneOffset: String(new Date().getTimezoneOffset() * -1),
    //               'Content-Type': 'application/json',
    //               Authorization: `Bearer ${this.authenticationService.token}`,
    //             },
    //           });
    //         }
    //       }
    //     }
    //     //
    //     // HttpResponse
    //     //
    //     if (httpEvent instanceof HttpResponse) {
    //       //
    //       // If we have an authorization header
    //       //
    //       if (httpEvent.headers.has('Authorization')) {
    //         //
    //         // Get the token from the header
    //         //
    //         this.authenticationService.setToken(httpEvent.headers.get('Authorization'));
    //       }
    //     }
    //   })
    // );
  }

  /**
   * constructor()
   */
  constructor(private authenticationService: LnAuthenticationService) {}
}
