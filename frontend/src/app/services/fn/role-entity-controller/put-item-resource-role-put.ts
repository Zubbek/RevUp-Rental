/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelRole } from '../../models/entity-model-role';
import { RoleRequestBody } from '../../models/role-request-body';

export interface PutItemResourceRolePut$Params {
  id: string;
      body: RoleRequestBody
}

export function putItemResourceRolePut(http: HttpClient, rootUrl: string, params: PutItemResourceRolePut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRole>> {
  const rb = new RequestBuilder(rootUrl, putItemResourceRolePut.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

putItemResourceRolePut.PATH = '/roles/{id}';
