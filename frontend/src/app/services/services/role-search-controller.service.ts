/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { EntityModelRole } from '../models/entity-model-role';
import { executeSearchRoleGet } from '../fn/role-search-controller/execute-search-role-get';
import { ExecuteSearchRoleGet$Params } from '../fn/role-search-controller/execute-search-role-get';

@Injectable({ providedIn: 'root' })
export class RoleSearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchRoleGet()` */
  static readonly ExecuteSearchRoleGetPath = '/roles/search/findByName';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchRoleGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchRoleGet$Response(params?: ExecuteSearchRoleGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRole>> {
    return executeSearchRoleGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchRoleGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchRoleGet(params?: ExecuteSearchRoleGet$Params, context?: HttpContext): Observable<EntityModelRole> {
    return this.executeSearchRoleGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRole>): EntityModelRole => r.body)
    );
  }

}
