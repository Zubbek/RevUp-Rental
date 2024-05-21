/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getMotorcyclesByCategory } from '../fn/motorcycle-controller/get-motorcycles-by-category';
import { GetMotorcyclesByCategory$Params } from '../fn/motorcycle-controller/get-motorcycles-by-category';
import { getMotorcyclesFromCategory } from '../fn/motorcycle-controller/get-motorcycles-from-category';
import { GetMotorcyclesFromCategory$Params } from '../fn/motorcycle-controller/get-motorcycles-from-category';
import { MotorcycleModel } from '../models/motorcycle-model';

@Injectable({ providedIn: 'root' })
export class MotorcycleControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getMotorcyclesFromCategory()` */
  static readonly GetMotorcyclesFromCategoryPath = '/motorcycle/{category}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMotorcyclesFromCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMotorcyclesFromCategory$Response(params: GetMotorcyclesFromCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MotorcycleModel>>> {
    return getMotorcyclesFromCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMotorcyclesFromCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMotorcyclesFromCategory(params: GetMotorcyclesFromCategory$Params, context?: HttpContext): Observable<Array<MotorcycleModel>> {
    return this.getMotorcyclesFromCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MotorcycleModel>>): Array<MotorcycleModel> => r.body)
    );
  }

  /** Path part for operation `getMotorcyclesByCategory()` */
  static readonly GetMotorcyclesByCategoryPath = '/home';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMotorcyclesByCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMotorcyclesByCategory$Response(params?: GetMotorcyclesByCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MotorcycleModel>>> {
    return getMotorcyclesByCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMotorcyclesByCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMotorcyclesByCategory(params?: GetMotorcyclesByCategory$Params, context?: HttpContext): Observable<Array<MotorcycleModel>> {
    return this.getMotorcyclesByCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MotorcycleModel>>): Array<MotorcycleModel> => r.body)
    );
  }

}
