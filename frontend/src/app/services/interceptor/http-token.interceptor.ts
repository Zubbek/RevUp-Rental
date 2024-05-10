import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {TokenService} from "../token/token.service";
import {catchError, throwError} from "rxjs";


export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = new TokenService();
  const token = tokenService.token;
  console.log("token z interceptora: ", token);
  if(token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token
      }
    })
    return next(authReq).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          // Handle HTTP errors
          if (err.status === 401) {
            // Specific handling for unauthorized errors
            console.error('Unauthorized request:', err);
            // You might trigger a re-authentication flow or redirect the user here
          } else {
            // Handle other HTTP error codes
            console.error('HTTP error:', err);
          }
        } else {
          // Handle non-HTTP errors
          console.error('An error occurred:', err);
        }
        return throwError(() => err);
      })
    );
  }
  return next(req);
};



//
//
// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor, HttpHeaders
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import {TokenService} from '../token/token.service';
//
// @Injectable()
// export class HttpTokenInterceptor implements HttpInterceptor {
//
//   constructor(
//     private tokenService: TokenService
//   ) {}
//
//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     const token = this.tokenService.token;
//     if (token) {
//       const authReq = request.clone({
//         headers: new HttpHeaders({
//           Authorization: 'Bearer ' + token
//         })
//       });
//       return next.handle(authReq);
//     }
//     return next.handle(request);
//   }
// }
//
