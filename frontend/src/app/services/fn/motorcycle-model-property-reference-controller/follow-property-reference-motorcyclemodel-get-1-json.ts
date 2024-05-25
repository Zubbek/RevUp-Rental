/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelFavouritesModel } from '../../models/collection-model-favourites-model';

export interface FollowPropertyReferenceMotorcyclemodelGet1$Json$Params {
  id: string;
}

export function followPropertyReferenceMotorcyclemodelGet1$Json(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceMotorcyclemodelGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFavouritesModel>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceMotorcyclemodelGet1$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

followPropertyReferenceMotorcyclemodelGet1$Json.PATH = '/motorcycleModels/{id}/favourites';
