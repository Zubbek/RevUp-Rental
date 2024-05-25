/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { EntityModelFavouritesModel } from '../models/entity-model-favourites-model';
import { executeSearchFavouritesmodelGet } from '../fn/favourites-model-search-controller/execute-search-favouritesmodel-get';
import { ExecuteSearchFavouritesmodelGet$Params } from '../fn/favourites-model-search-controller/execute-search-favouritesmodel-get';

@Injectable({ providedIn: 'root' })
export class FavouritesModelSearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchFavouritesmodelGet()` */
  static readonly ExecuteSearchFavouritesmodelGetPath = '/favouritesModels/search/findByUserAndMotorcycle';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchFavouritesmodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchFavouritesmodelGet$Response(params?: ExecuteSearchFavouritesmodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFavouritesModel>> {
    return executeSearchFavouritesmodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchFavouritesmodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchFavouritesmodelGet(params?: ExecuteSearchFavouritesmodelGet$Params, context?: HttpContext): Observable<EntityModelFavouritesModel> {
    return this.executeSearchFavouritesmodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFavouritesModel>): EntityModelFavouritesModel => r.body)
    );
  }

}
