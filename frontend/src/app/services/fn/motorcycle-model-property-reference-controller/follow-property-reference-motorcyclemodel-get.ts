/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelMotorcycleDetailsModel } from '../../models/entity-model-motorcycle-details-model';

export interface FollowPropertyReferenceMotorcyclemodelGet$Params {
  id: string;
  propertyId: string;
}

export function followPropertyReferenceMotorcyclemodelGet(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceMotorcyclemodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleDetailsModel>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceMotorcyclemodelGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelMotorcycleDetailsModel>;
    })
  );
}

followPropertyReferenceMotorcyclemodelGet.PATH = '/motorcycleModels/{id}/motorcycleDetails/{propertyId}';
