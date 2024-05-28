/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelObject } from '../../models/collection-model-object';
import { EntityModelReservationDetailsModel } from '../../models/entity-model-reservation-details-model';

export interface CreatePropertyReferenceReservationmodelPut$Json$Params {
  id: string;
      body: CollectionModelObject
}

export function createPropertyReferenceReservationmodelPut$Json(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceReservationmodelPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationDetailsModel>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceReservationmodelPut$Json.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-spring-data-compact+json');
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

createPropertyReferenceReservationmodelPut$Json.PATH = '/reservationModels/{id}/reservationDetails';
