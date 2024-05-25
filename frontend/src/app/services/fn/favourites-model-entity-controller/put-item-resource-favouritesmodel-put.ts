/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelFavouritesModel } from '../../models/entity-model-favourites-model';
import { FavouritesModelRequestBody } from '../../models/favourites-model-request-body';

export interface PutItemResourceFavouritesmodelPut$Params {
  id: string;
      body: FavouritesModelRequestBody
}

export function putItemResourceFavouritesmodelPut(http: HttpClient, rootUrl: string, params: PutItemResourceFavouritesmodelPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFavouritesModel>> {
  const rb = new RequestBuilder(rootUrl, putItemResourceFavouritesmodelPut.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelFavouritesModel>;
    })
  );
}

putItemResourceFavouritesmodelPut.PATH = '/favouritesModels/{id}';
