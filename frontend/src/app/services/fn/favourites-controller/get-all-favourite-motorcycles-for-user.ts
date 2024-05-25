/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MotorcycleModel } from '../../models/motorcycle-model';

export interface GetAllFavouriteMotorcyclesForUser$Params {
  userId: number;
}

export function getAllFavouriteMotorcyclesForUser(http: HttpClient, rootUrl: string, params: GetAllFavouriteMotorcyclesForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MotorcycleModel>>> {
  const rb = new RequestBuilder(rootUrl, getAllFavouriteMotorcyclesForUser.PATH, 'get');
  if (params) {
    rb.path('userId', params.userId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MotorcycleModel>>;
    })
  );
}

getAllFavouriteMotorcyclesForUser.PATH = '/api/favourites/{userId}';
