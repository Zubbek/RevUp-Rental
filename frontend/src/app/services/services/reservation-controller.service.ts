/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createReservation } from '../fn/reservation-controller/create-reservation';
import { CreateReservation$Params } from '../fn/reservation-controller/create-reservation';
import { getAvailableDates } from '../fn/reservation-controller/get-available-dates';
import { GetAvailableDates$Params } from '../fn/reservation-controller/get-available-dates';

@Injectable({ providedIn: 'root' })
export class ReservationControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAvailableDates()` */
  static readonly GetAvailableDatesPath = '/reservation/{motorcycleId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAvailableDates()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAvailableDates$Response(params: GetAvailableDates$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return getAvailableDates(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAvailableDates$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAvailableDates(params: GetAvailableDates$Params, context?: HttpContext): Observable<Array<string>> {
    return this.getAvailableDates$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

  /** Path part for operation `createReservation()` */
  static readonly CreateReservationPath = '/reservation/{motorcycleId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createReservation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createReservation$Response(params: CreateReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return createReservation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createReservation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createReservation(params: CreateReservation$Params, context?: HttpContext): Observable<{
}> {
    return this.createReservation$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
