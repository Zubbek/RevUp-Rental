/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelReservationModel } from '../../models/entity-model-reservation-model';

export interface CreatePropertyReferenceReservationdetailsmodelPatch$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceReservationdetailsmodelPatch$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceReservationdetailsmodelPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationModel>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceReservationdetailsmodelPatch$UriList.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelReservationModel>;
    })
  );
}

createPropertyReferenceReservationdetailsmodelPatch$UriList.PATH = '/reservationDetailsModels/{id}/reservation';
