/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelRole } from '../../models/entity-model-role';

export interface ExecuteSearchRoleGet$Params {
  role?: string;
}

export function executeSearchRoleGet(http: HttpClient, rootUrl: string, params?: ExecuteSearchRoleGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRole>> {
  const rb = new RequestBuilder(rootUrl, executeSearchRoleGet.PATH, 'get');
  if (params) {
    rb.query('role', params.role, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelRole>;
    })
  );
}

executeSearchRoleGet.PATH = '/roles/search/findByName';
