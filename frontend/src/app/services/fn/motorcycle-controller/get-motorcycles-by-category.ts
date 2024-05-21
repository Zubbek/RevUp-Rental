/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MotorcycleDto } from '../../models/motorcycle-dto';

export interface GetMotorcyclesByCategory$Params {
}

export function getMotorcyclesByCategory(http: HttpClient, rootUrl: string, params?: GetMotorcyclesByCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MotorcycleDto>>> {
  const rb = new RequestBuilder(rootUrl, getMotorcyclesByCategory.PATH, 'get');
  if (params) {
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

getMotorcyclesByCategory.PATH = '/home';