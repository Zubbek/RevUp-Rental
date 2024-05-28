/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelReservationModel } from '../../models/collection-model-reservation-model';

export interface FollowPropertyReferenceMotorcyclemodelGet21$Json$Params {
  id: string;
}

export function followPropertyReferenceMotorcyclemodelGet21$Json(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceMotorcyclemodelGet21$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelReservationModel>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceMotorcyclemodelGet21$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

followPropertyReferenceMotorcyclemodelGet21$Json.PATH = '/motorcycleModels/{id}/reservations';
