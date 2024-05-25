/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { EntityModelMotorcycleDetailsModel } from '../models/entity-model-motorcycle-details-model';
import { executeSearchMotorcycledetailsmodelGet } from '../fn/motorcycle-details-model-search-controller/execute-search-motorcycledetailsmodel-get';
import { ExecuteSearchMotorcycledetailsmodelGet$Params } from '../fn/motorcycle-details-model-search-controller/execute-search-motorcycledetailsmodel-get';

@Injectable({ providedIn: 'root' })
export class MotorcycleDetailsModelSearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchMotorcycledetailsmodelGet()` */
  static readonly ExecuteSearchMotorcycledetailsmodelGetPath = '/motorcycleDetailsModels/search/findById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchMotorcycledetailsmodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchMotorcycledetailsmodelGet$Response(params?: ExecuteSearchMotorcycledetailsmodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleDetailsModel>> {
    return executeSearchMotorcycledetailsmodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchMotorcycledetailsmodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchMotorcycledetailsmodelGet(params?: ExecuteSearchMotorcycledetailsmodelGet$Params, context?: HttpContext): Observable<EntityModelMotorcycleDetailsModel> {
    return this.executeSearchMotorcycledetailsmodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleDetailsModel>): EntityModelMotorcycleDetailsModel => r.body)
    );
  }

}
