/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelMotorcycleModel } from '../../models/entity-model-motorcycle-model';

export interface CreatePropertyReferenceFavouritesmodelPut$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceFavouritesmodelPut$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceFavouritesmodelPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceFavouritesmodelPut$UriList.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
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

createPropertyReferenceFavouritesmodelPut$UriList.PATH = '/favouritesModels/{id}/motorcycle';
