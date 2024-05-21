/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelMotorcycleModel } from '../../models/entity-model-motorcycle-model';

export interface GetItemResourceMotorcyclemodelGet$Params {
  id: string;
}

export function getItemResourceMotorcyclemodelGet(http: HttpClient, rootUrl: string, params: GetItemResourceMotorcyclemodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
  const rb = new RequestBuilder(rootUrl, getItemResourceMotorcyclemodelGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelMotorcycleModel>;
    })
  );
}

getItemResourceMotorcyclemodelGet.PATH = '/motorcycleModels/{id}';
