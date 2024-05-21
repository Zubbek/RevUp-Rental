/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelMotorcycleModel } from '../../models/entity-model-motorcycle-model';
import { MotorcycleModelRequestBody } from '../../models/motorcycle-model-request-body';

export interface PatchItemResourceMotorcyclemodelPatch$Params {
  id: string;
      body: MotorcycleModelRequestBody
}

export function patchItemResourceMotorcyclemodelPatch(http: HttpClient, rootUrl: string, params: PatchItemResourceMotorcyclemodelPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
  const rb = new RequestBuilder(rootUrl, patchItemResourceMotorcyclemodelPatch.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelMotorcycleModel>;
    })
  );
}

patchItemResourceMotorcyclemodelPatch.PATH = '/motorcycleModels/{id}';
