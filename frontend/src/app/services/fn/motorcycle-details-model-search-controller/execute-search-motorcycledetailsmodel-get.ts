/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelMotorcycleDetailsModel } from '../../models/entity-model-motorcycle-details-model';

export interface ExecuteSearchMotorcycledetailsmodelGet$Params {
  motorcycleId?: number;
}

export function executeSearchMotorcycledetailsmodelGet(http: HttpClient, rootUrl: string, params?: ExecuteSearchMotorcycledetailsmodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleDetailsModel>> {
  const rb = new RequestBuilder(rootUrl, executeSearchMotorcycledetailsmodelGet.PATH, 'get');
  if (params) {
    rb.query('motorcycleId', params.motorcycleId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelMotorcycleDetailsModel>;
    })
  );
}

executeSearchMotorcycledetailsmodelGet.PATH = '/motorcycleDetailsModels/search/findById';
