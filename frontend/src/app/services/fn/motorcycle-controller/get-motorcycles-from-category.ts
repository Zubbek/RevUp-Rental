/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MotorcycleDto } from '../../models/motorcycle-dto';

export interface GetMotorcyclesFromCategory$Params {
  category: string;
}

export function getMotorcyclesFromCategory(http: HttpClient, rootUrl: string, params: GetMotorcyclesFromCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MotorcycleDto>>> {
  const rb = new RequestBuilder(rootUrl, getMotorcyclesFromCategory.PATH, 'get');
  if (params) {
    rb.path('category', params.category, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MotorcycleDto>>;
    })
  );
}

getMotorcyclesFromCategory.PATH = '/motorcycle/{category}';
