/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollectionModelEntityModelReservationModel } from '../models/collection-model-entity-model-reservation-model';
import { executeSearchReservationmodelGet } from '../fn/reservation-model-search-controller/execute-search-reservationmodel-get';
import { ExecuteSearchReservationmodelGet$Params } from '../fn/reservation-model-search-controller/execute-search-reservationmodel-get';
import { executeSearchReservationmodelGet1 } from '../fn/reservation-model-search-controller/execute-search-reservationmodel-get-1';
import { ExecuteSearchReservationmodelGet1$Params } from '../fn/reservation-model-search-controller/execute-search-reservationmodel-get-1';

@Injectable({ providedIn: 'root' })
export class ReservationModelSearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchReservationmodelGet()` */
  static readonly ExecuteSearchReservationmodelGetPath = '/reservationModels/search/findByMotorcycleId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchReservationmodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchReservationmodelGet$Response(params?: ExecuteSearchReservationmodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelReservationModel>> {
    return executeSearchReservationmodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchReservationmodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchReservationmodelGet(params?: ExecuteSearchReservationmodelGet$Params, context?: HttpContext): Observable<CollectionModelEntityModelReservationModel> {
    return this.executeSearchReservationmodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEntityModelReservationModel>): CollectionModelEntityModelReservationModel => r.body)
    );
  }

  /** Path part for operation `executeSearchReservationmodelGet1()` */
  static readonly ExecuteSearchReservationmodelGet1Path = '/reservationModels/search/findConflictingReservations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchReservationmodelGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchReservationmodelGet1$Response(params?: ExecuteSearchReservationmodelGet1$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelReservationModel>> {
    return executeSearchReservationmodelGet1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchReservationmodelGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchReservationmodelGet1(params?: ExecuteSearchReservationmodelGet1$Params, context?: HttpContext): Observable<CollectionModelEntityModelReservationModel> {
    return this.executeSearchReservationmodelGet1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEntityModelReservationModel>): CollectionModelEntityModelReservationModel => r.body)
    );
  }

}
