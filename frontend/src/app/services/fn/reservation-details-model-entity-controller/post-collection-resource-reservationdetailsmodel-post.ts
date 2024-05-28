/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelReservationDetailsModel } from '../../models/entity-model-reservation-details-model';
import { ReservationDetailsModelRequestBody } from '../../models/reservation-details-model-request-body';

export interface PostCollectionResourceReservationdetailsmodelPost$Params {
      body: ReservationDetailsModelRequestBody
}

export function postCollectionResourceReservationdetailsmodelPost(http: HttpClient, rootUrl: string, params: PostCollectionResourceReservationdetailsmodelPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationDetailsModel>> {
  const rb = new RequestBuilder(rootUrl, postCollectionResourceReservationdetailsmodelPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

postCollectionResourceReservationdetailsmodelPost.PATH = '/reservationDetailsModels';
