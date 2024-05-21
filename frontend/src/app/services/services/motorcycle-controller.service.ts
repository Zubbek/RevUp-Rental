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
import { MotorcycleDto } from '../models/motorcycle-dto';

@Injectable({ providedIn: 'root' })
export class MotorcycleControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getMotorcyclesByCategory()` */
  static readonly GetMotorcyclesByCategoryPath = '/home';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMotorcyclesByCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMotorcyclesByCategory$Response(params?: GetMotorcyclesByCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MotorcycleDto>>> {
    return getMotorcyclesByCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMotorcyclesByCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMotorcyclesByCategory(params?: GetMotorcyclesByCategory$Params, context?: HttpContext): Observable<Array<MotorcycleDto>> {
    return this.getMotorcyclesByCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MotorcycleDto>>): Array<MotorcycleDto> => r.body)
    );
  }

}
