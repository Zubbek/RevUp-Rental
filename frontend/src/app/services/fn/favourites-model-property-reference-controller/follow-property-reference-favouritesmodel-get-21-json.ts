/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelUserModel } from '../../models/entity-model-user-model';

export interface FollowPropertyReferenceFavouritesmodelGet21$Json$Params {
  id: string;
}

export function followPropertyReferenceFavouritesmodelGet21$Json(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceFavouritesmodelGet21$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUserModel>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceFavouritesmodelGet21$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelUserModel>;
    })
  );
}

followPropertyReferenceFavouritesmodelGet21$Json.PATH = '/favouritesModels/{id}/user';
