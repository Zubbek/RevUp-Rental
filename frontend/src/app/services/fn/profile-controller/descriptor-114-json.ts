/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { JsonSchema } from '../../models/json-schema';

export interface Descriptor114$Json$Params {
}

export function descriptor114$Json(http: HttpClient, rootUrl: string, params?: Descriptor114$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
  const rb = new RequestBuilder(rootUrl, descriptor114$Json.PATH, 'get');
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

descriptor114$Json.PATH = '/profile/userModels';
