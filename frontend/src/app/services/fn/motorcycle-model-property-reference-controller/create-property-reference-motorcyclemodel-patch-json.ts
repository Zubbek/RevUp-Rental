/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelFavouritesModel } from '../../models/collection-model-favourites-model';
import { CollectionModelObject } from '../../models/collection-model-object';

export interface CreatePropertyReferenceMotorcyclemodelPatch$Json$Params {
  id: string;
      body: CollectionModelObject
}

export function createPropertyReferenceMotorcyclemodelPatch$Json(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceMotorcyclemodelPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFavouritesModel>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceMotorcyclemodelPatch$Json.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-spring-data-compact+json');
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

createPropertyReferenceMotorcyclemodelPatch$Json.PATH = '/motorcycleModels/{id}/favourites';
