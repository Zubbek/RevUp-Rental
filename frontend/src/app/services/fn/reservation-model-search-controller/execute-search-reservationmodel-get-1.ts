/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelEntityModelReservationModel } from '../../models/collection-model-entity-model-reservation-model';

export interface ExecuteSearchReservationmodelGet1$Params {
  motorcycleId?: number;
  startDate?: string;
  endDate?: string;
}

export function executeSearchReservationmodelGet1(http: HttpClient, rootUrl: string, params?: ExecuteSearchReservationmodelGet1$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelReservationModel>> {
  const rb = new RequestBuilder(rootUrl, executeSearchReservationmodelGet1.PATH, 'get');
  if (params) {
    rb.query('motorcycleId', params.motorcycleId, {});
    rb.query('startDate', params.startDate, {});
    rb.query('endDate', params.endDate, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelEntityModelReservationModel>;
    })
  );
}

executeSearchReservationmodelGet1.PATH = '/reservationModels/search/findConflictingReservations';
