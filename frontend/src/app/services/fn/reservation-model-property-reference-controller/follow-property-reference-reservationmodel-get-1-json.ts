/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelReservationDetailsModel } from '../../models/entity-model-reservation-details-model';

export interface FollowPropertyReferenceReservationmodelGet1$Json$Params {
  id: string;
}

export function followPropertyReferenceReservationmodelGet1$Json(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceReservationmodelGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationDetailsModel>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceReservationmodelGet1$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelReservationDetailsModel>;
    })
  );
}

followPropertyReferenceReservationmodelGet1$Json.PATH = '/reservationModels/{id}/reservationDetails';
