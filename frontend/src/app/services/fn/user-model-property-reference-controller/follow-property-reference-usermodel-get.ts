/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelFavouritesModel } from '../../models/collection-model-favourites-model';

export interface FollowPropertyReferenceUsermodelGet$Params {
  id: string;
  propertyId: string;
}

export function followPropertyReferenceUsermodelGet(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceUsermodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFavouritesModel>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceUsermodelGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
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

followPropertyReferenceUsermodelGet.PATH = '/userModels/{id}/favourites/{propertyId}';
