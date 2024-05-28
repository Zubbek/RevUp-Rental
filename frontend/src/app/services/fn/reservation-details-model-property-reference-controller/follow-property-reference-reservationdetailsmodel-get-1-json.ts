/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelReservationModel } from '../../models/entity-model-reservation-model';

export interface FollowPropertyReferenceReservationdetailsmodelGet1$Json$Params {
  id: string;
}

export function followPropertyReferenceReservationdetailsmodelGet1$Json(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceReservationdetailsmodelGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationModel>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceReservationdetailsmodelGet1$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

followPropertyReferenceReservationdetailsmodelGet1$Json.PATH = '/reservationDetailsModels/{id}/reservation';
