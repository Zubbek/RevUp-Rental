/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelReservationModel } from '../../models/entity-model-reservation-model';
import { ReservationModelRequestBody } from '../../models/reservation-model-request-body';

export interface PatchItemResourceReservationmodelPatch$Params {
  id: string;
      body: ReservationModelRequestBody
}

export function patchItemResourceReservationmodelPatch(http: HttpClient, rootUrl: string, params: PatchItemResourceReservationmodelPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationModel>> {
  const rb = new RequestBuilder(rootUrl, patchItemResourceReservationmodelPatch.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
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

patchItemResourceReservationmodelPatch.PATH = '/reservationModels/{id}';
