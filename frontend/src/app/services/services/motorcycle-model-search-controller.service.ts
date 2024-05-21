/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollectionModelEntityModelMotorcycleModel } from '../models/collection-model-entity-model-motorcycle-model';
import { executeSearchMotorcyclemodelGet } from '../fn/motorcycle-model-search-controller/execute-search-motorcyclemodel-get';
import { ExecuteSearchMotorcyclemodelGet$Params } from '../fn/motorcycle-model-search-controller/execute-search-motorcyclemodel-get';

@Injectable({ providedIn: 'root' })
export class MotorcycleModelSearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchMotorcyclemodelGet()` */
  static readonly ExecuteSearchMotorcyclemodelGetPath = '/motorcycleModels/search/findByCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchMotorcyclemodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchMotorcyclemodelGet$Response(params?: ExecuteSearchMotorcyclemodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelMotorcycleModel>> {
    return executeSearchMotorcyclemodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchMotorcyclemodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchMotorcyclemodelGet(params?: ExecuteSearchMotorcyclemodelGet$Params, context?: HttpContext): Observable<CollectionModelEntityModelMotorcycleModel> {
    return this.executeSearchMotorcyclemodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEntityModelMotorcycleModel>): CollectionModelEntityModelMotorcycleModel => r.body)
    );
  }

}
