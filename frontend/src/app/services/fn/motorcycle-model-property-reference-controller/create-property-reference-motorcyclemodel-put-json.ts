/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelObject } from '../../models/collection-model-object';
import { EntityModelMotorcycleDetailsModel } from '../../models/entity-model-motorcycle-details-model';

export interface CreatePropertyReferenceMotorcyclemodelPut$Json$Params {
  id: string;
      body: CollectionModelObject
}

export function createPropertyReferenceMotorcyclemodelPut$Json(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceMotorcyclemodelPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleDetailsModel>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceMotorcyclemodelPut$Json.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-spring-data-compact+json');
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

createPropertyReferenceMotorcyclemodelPut$Json.PATH = '/motorcycleModels/{id}/motorcycleDetails';
