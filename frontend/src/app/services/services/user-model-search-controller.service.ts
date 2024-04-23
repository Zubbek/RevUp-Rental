/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { EntityModelUserModel } from '../models/entity-model-user-model';
import { executeSearchUsermodelGet } from '../fn/user-model-search-controller/execute-search-usermodel-get';
import { ExecuteSearchUsermodelGet$Params } from '../fn/user-model-search-controller/execute-search-usermodel-get';

@Injectable({ providedIn: 'root' })
export class UserModelSearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchUsermodelGet()` */
  static readonly ExecuteSearchUsermodelGetPath = '/userModels/search/findByEmail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchUsermodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchUsermodelGet$Response(params?: ExecuteSearchUsermodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUserModel>> {
    return executeSearchUsermodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchUsermodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchUsermodelGet(params?: ExecuteSearchUsermodelGet$Params, context?: HttpContext): Observable<EntityModelUserModel> {
    return this.executeSearchUsermodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUserModel>): EntityModelUserModel => r.body)
    );
  }

}
