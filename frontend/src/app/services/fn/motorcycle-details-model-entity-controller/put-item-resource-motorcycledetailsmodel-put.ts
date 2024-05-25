/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelMotorcycleDetailsModel } from '../../models/entity-model-motorcycle-details-model';
import { MotorcycleDetailsModelRequestBody } from '../../models/motorcycle-details-model-request-body';

export interface PutItemResourceMotorcycledetailsmodelPut$Params {
  id: string;
      body: MotorcycleDetailsModelRequestBody
}

export function putItemResourceMotorcycledetailsmodelPut(http: HttpClient, rootUrl: string, params: PutItemResourceMotorcycledetailsmodelPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleDetailsModel>> {
  const rb = new RequestBuilder(rootUrl, putItemResourceMotorcycledetailsmodelPut.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

putItemResourceMotorcycledetailsmodelPut.PATH = '/motorcycleDetailsModels/{id}';
