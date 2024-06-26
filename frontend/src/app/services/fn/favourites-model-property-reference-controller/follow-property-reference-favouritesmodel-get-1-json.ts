/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelMotorcycleModel } from '../../models/entity-model-motorcycle-model';

export interface FollowPropertyReferenceFavouritesmodelGet1$Json$Params {
  id: string;
}

export function followPropertyReferenceFavouritesmodelGet1$Json(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceFavouritesmodelGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceFavouritesmodelGet1$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelMotorcycleModel>;
    })
  );
}

followPropertyReferenceFavouritesmodelGet1$Json.PATH = '/favouritesModels/{id}/motorcycle';
