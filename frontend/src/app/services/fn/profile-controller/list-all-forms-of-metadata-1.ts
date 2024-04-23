/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RepresentationModelObject } from '../../models/representation-model-object';

export interface ListAllFormsOfMetadata1$Params {
}

export function listAllFormsOfMetadata1(http: HttpClient, rootUrl: string, params?: ListAllFormsOfMetadata1$Params, context?: HttpContext): Observable<StrictHttpResponse<RepresentationModelObject>> {
  const rb = new RequestBuilder(rootUrl, listAllFormsOfMetadata1.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RepresentationModelObject>;
    })
  );
}

listAllFormsOfMetadata1.PATH = '/profile';
