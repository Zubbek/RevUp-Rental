/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelRole } from '../../models/entity-model-role';

export interface GetItemResourceRoleGet$Params {
  id: string;
}

export function getItemResourceRoleGet(http: HttpClient, rootUrl: string, params: GetItemResourceRoleGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRole>> {
  const rb = new RequestBuilder(rootUrl, getItemResourceRoleGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getItemResourceRoleGet.PATH = '/roles/{id}';
