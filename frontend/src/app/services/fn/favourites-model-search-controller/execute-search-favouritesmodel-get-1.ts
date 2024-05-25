/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MotorcycleModel } from '../../models/motorcycle-model';
import { UserModel } from '../../models/user-model';

export interface ExecuteSearchFavouritesmodelGet1$Params {
  user?: UserModel;
  motorcycle?: MotorcycleModel;
}

export function executeSearchFavouritesmodelGet1(http: HttpClient, rootUrl: string, params?: ExecuteSearchFavouritesmodelGet1$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
  const rb = new RequestBuilder(rootUrl, executeSearchFavouritesmodelGet1.PATH, 'get');
  if (params) {
    rb.query('user', params.user, {});
    rb.query('motorcycle', params.motorcycle, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
    })
  );
}

executeSearchFavouritesmodelGet1.PATH = '/favouritesModels/search/existsByUserAndMotorcycle';
