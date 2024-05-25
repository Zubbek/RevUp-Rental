/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollectionModelEntityModelFavouritesModel } from '../models/collection-model-entity-model-favourites-model';
import { executeSearchFavouritesmodelGet } from '../fn/favourites-model-search-controller/execute-search-favouritesmodel-get';
import { ExecuteSearchFavouritesmodelGet$Params } from '../fn/favourites-model-search-controller/execute-search-favouritesmodel-get';
import { executeSearchFavouritesmodelGet1 } from '../fn/favourites-model-search-controller/execute-search-favouritesmodel-get-1';
import { ExecuteSearchFavouritesmodelGet1$Params } from '../fn/favourites-model-search-controller/execute-search-favouritesmodel-get-1';
import { executeSearchFavouritesmodelGet2 } from '../fn/favourites-model-search-controller/execute-search-favouritesmodel-get-2';
import { ExecuteSearchFavouritesmodelGet2$Params } from '../fn/favourites-model-search-controller/execute-search-favouritesmodel-get-2';

@Injectable({ providedIn: 'root' })
export class FavouritesModelSearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchFavouritesmodelGet()` */
  static readonly ExecuteSearchFavouritesmodelGetPath = '/favouritesModels/search/deleteMotorcycleFromFavourites';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchFavouritesmodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchFavouritesmodelGet$Response(params?: ExecuteSearchFavouritesmodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return executeSearchFavouritesmodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchFavouritesmodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchFavouritesmodelGet(params?: ExecuteSearchFavouritesmodelGet$Params, context?: HttpContext): Observable<void> {
    return this.executeSearchFavouritesmodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `executeSearchFavouritesmodelGet1()` */
  static readonly ExecuteSearchFavouritesmodelGet1Path = '/favouritesModels/search/existsByUserAndMotorcycle';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchFavouritesmodelGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchFavouritesmodelGet1$Response(params?: ExecuteSearchFavouritesmodelGet1$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return executeSearchFavouritesmodelGet1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchFavouritesmodelGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchFavouritesmodelGet1(params?: ExecuteSearchFavouritesmodelGet1$Params, context?: HttpContext): Observable<boolean> {
    return this.executeSearchFavouritesmodelGet1$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `executeSearchFavouritesmodelGet2()` */
  static readonly ExecuteSearchFavouritesmodelGet2Path = '/favouritesModels/search/findFavouriteMotorcyclesByUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchFavouritesmodelGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchFavouritesmodelGet2$Response(params?: ExecuteSearchFavouritesmodelGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelFavouritesModel>> {
    return executeSearchFavouritesmodelGet2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchFavouritesmodelGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchFavouritesmodelGet2(params?: ExecuteSearchFavouritesmodelGet2$Params, context?: HttpContext): Observable<CollectionModelEntityModelFavouritesModel> {
    return this.executeSearchFavouritesmodelGet2$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEntityModelFavouritesModel>): CollectionModelEntityModelFavouritesModel => r.body)
    );
  }

}
