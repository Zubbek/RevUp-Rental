/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PagedModelEntityModelFavouritesModel } from '../../models/paged-model-entity-model-favourites-model';

export interface GetCollectionResourceFavouritesmodelGet1$Json$Params {

/**
 * Zero-based page index (0..N)
 */
  page?: number;

/**
 * The size of the page to be returned
 */
  size?: number;

/**
 * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
 */
  sort?: Array<string>;
}

export function getCollectionResourceFavouritesmodelGet1$Json(http: HttpClient, rootUrl: string, params?: GetCollectionResourceFavouritesmodelGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelFavouritesModel>> {
  const rb = new RequestBuilder(rootUrl, getCollectionResourceFavouritesmodelGet1$Json.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
    rb.query('sort', params.sort, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/x-spring-data-compact+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PagedModelEntityModelFavouritesModel>;
    })
  );
}

getCollectionResourceFavouritesmodelGet1$Json.PATH = '/favouritesModels';
