/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelEntityModelFavouritesModel } from '../../models/collection-model-entity-model-favourites-model';
import { UserModel } from '../../models/user-model';

export interface ExecuteSearchFavouritesmodelGet2$Params {
  user?: UserModel;
}

export function executeSearchFavouritesmodelGet2(http: HttpClient, rootUrl: string, params?: ExecuteSearchFavouritesmodelGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelFavouritesModel>> {
  const rb = new RequestBuilder(rootUrl, executeSearchFavouritesmodelGet2.PATH, 'get');
  if (params) {
    rb.query('user', params.user, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelEntityModelFavouritesModel>;
    })
  );
}

executeSearchFavouritesmodelGet2.PATH = '/favouritesModels/search/findFavouriteMotorcyclesByUser';
