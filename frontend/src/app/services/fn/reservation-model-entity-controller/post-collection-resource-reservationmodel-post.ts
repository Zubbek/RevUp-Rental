/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelReservationModel } from '../../models/entity-model-reservation-model';
import { ReservationModelRequestBody } from '../../models/reservation-model-request-body';

export interface PostCollectionResourceReservationmodelPost$Params {
      body: ReservationModelRequestBody
}

export function postCollectionResourceReservationmodelPost(http: HttpClient, rootUrl: string, params: PostCollectionResourceReservationmodelPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationModel>> {
  const rb = new RequestBuilder(rootUrl, postCollectionResourceReservationmodelPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

postCollectionResourceReservationmodelPost.PATH = '/reservationModels';
