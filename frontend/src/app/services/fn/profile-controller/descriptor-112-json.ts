/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { JsonSchema } from '../../models/json-schema';

export interface Descriptor112$Json$Params {
}

export function descriptor112$Json(http: HttpClient, rootUrl: string, params?: Descriptor112$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
  const rb = new RequestBuilder(rootUrl, descriptor112$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/schema+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<JsonSchema>;
    })
  );
}

descriptor112$Json.PATH = '/profile/userModels';
