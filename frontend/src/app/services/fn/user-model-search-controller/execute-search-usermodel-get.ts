/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelEntityModelUserModel } from '../../models/collection-model-entity-model-user-model';
import { Role } from '../../models/role';

export interface ExecuteSearchUsermodelGet$Params {
  role?: Role;
}

export function executeSearchUsermodelGet(http: HttpClient, rootUrl: string, params?: ExecuteSearchUsermodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelUserModel>> {
  const rb = new RequestBuilder(rootUrl, executeSearchUsermodelGet.PATH, 'get');
  if (params) {
    rb.query('role', params.role, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelEntityModelUserModel>;
    })
  );
}

executeSearchUsermodelGet.PATH = '/userModels/search/findAllByRolesContains';
