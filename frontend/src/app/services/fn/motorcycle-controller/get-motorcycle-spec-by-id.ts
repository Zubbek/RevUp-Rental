/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MotorcycleDetailsModel } from '../../models/motorcycle-details-model';

export interface GetMotorcycleSpecById$Params {
  id: number;
}

export function getMotorcycleSpecById(http: HttpClient, rootUrl: string, params: GetMotorcycleSpecById$Params, context?: HttpContext): Observable<StrictHttpResponse<MotorcycleDetailsModel>> {
  const rb = new RequestBuilder(rootUrl, getMotorcycleSpecById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MotorcycleDetailsModel>;
    })
  );
}

getMotorcycleSpecById.PATH = '/reservation/{id}';
