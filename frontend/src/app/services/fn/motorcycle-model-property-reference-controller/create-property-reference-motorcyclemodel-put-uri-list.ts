/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelFavouritesModel } from '../../models/collection-model-favourites-model';

export interface CreatePropertyReferenceMotorcyclemodelPut$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceMotorcyclemodelPut$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceMotorcyclemodelPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFavouritesModel>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceMotorcyclemodelPut$UriList.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelFavouritesModel>;
    })
  );
}

createPropertyReferenceMotorcyclemodelPut$UriList.PATH = '/motorcycleModels/{id}/favourites';
