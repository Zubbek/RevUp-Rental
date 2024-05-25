/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelFavouritesModel } from '../../models/entity-model-favourites-model';
import { MotorcycleModel } from '../../models/motorcycle-model';
import { UserModel } from '../../models/user-model';

export interface ExecuteSearchFavouritesmodelGet$Params {
  user?: UserModel;
  motorcycle?: MotorcycleModel;
}

export function executeSearchFavouritesmodelGet(http: HttpClient, rootUrl: string, params?: ExecuteSearchFavouritesmodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFavouritesModel>> {
  const rb = new RequestBuilder(rootUrl, executeSearchFavouritesmodelGet.PATH, 'get');
  if (params) {
    rb.query('user', params.user, {});
    rb.query('motorcycle', params.motorcycle, {});
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

executeSearchFavouritesmodelGet.PATH = '/favouritesModels/search/findByUserAndMotorcycle';
