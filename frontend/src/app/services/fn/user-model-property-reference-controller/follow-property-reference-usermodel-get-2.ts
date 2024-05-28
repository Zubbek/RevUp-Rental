/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelReservationModel } from '../../models/collection-model-reservation-model';

export interface FollowPropertyReferenceUsermodelGet2$Params {
  id: string;
  propertyId: string;
}

export function followPropertyReferenceUsermodelGet2(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceUsermodelGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelReservationModel>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceUsermodelGet2.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelReservationModel>;
    })
  );
}

followPropertyReferenceUsermodelGet2.PATH = '/userModels/{id}/reservations/{propertyId}';
