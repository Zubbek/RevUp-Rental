/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelReservationModel } from '../../models/entity-model-reservation-model';

export interface FollowPropertyReferenceReservationdetailsmodelGet$Params {
  id: string;
  propertyId: string;
}

export function followPropertyReferenceReservationdetailsmodelGet(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceReservationdetailsmodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationModel>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceReservationdetailsmodelGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
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

followPropertyReferenceReservationdetailsmodelGet.PATH = '/reservationDetailsModels/{id}/reservation/{propertyId}';
