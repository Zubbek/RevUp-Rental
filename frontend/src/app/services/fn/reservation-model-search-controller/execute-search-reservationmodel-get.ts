/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelEntityModelReservationModel } from '../../models/collection-model-entity-model-reservation-model';

export interface ExecuteSearchReservationmodelGet$Params {
  motorcycleId?: number;
}

export function executeSearchReservationmodelGet(http: HttpClient, rootUrl: string, params?: ExecuteSearchReservationmodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelReservationModel>> {
  const rb = new RequestBuilder(rootUrl, executeSearchReservationmodelGet.PATH, 'get');
  if (params) {
    rb.query('motorcycleId', params.motorcycleId, {});
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

executeSearchReservationmodelGet.PATH = '/reservationModels/search/findByMotorcycleId';
