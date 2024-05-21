/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelEntityModelMotorcycleModel } from '../../models/collection-model-entity-model-motorcycle-model';

export interface ExecuteSearchMotorcyclemodelGet$Params {
  category?: string;
}

export function executeSearchMotorcyclemodelGet(http: HttpClient, rootUrl: string, params?: ExecuteSearchMotorcyclemodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelMotorcycleModel>> {
  const rb = new RequestBuilder(rootUrl, executeSearchMotorcyclemodelGet.PATH, 'get');
  if (params) {
    rb.query('category', params.category, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelEntityModelMotorcycleModel>;
    })
  );
}

executeSearchMotorcyclemodelGet.PATH = '/motorcycleModels/search/findByCategory';
