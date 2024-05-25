/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addToFavourites } from '../fn/favourites-controller/add-to-favourites';
import { AddToFavourites$Params } from '../fn/favourites-controller/add-to-favourites';

@Injectable({ providedIn: 'root' })
export class FavouritesControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addToFavourites()` */
  static readonly AddToFavouritesPath = '/api/favourites/{motorcycleId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addToFavourites()` instead.
   *
   * This method doesn't expect any request body.
   */
  addToFavourites$Response(params: AddToFavourites$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addToFavourites(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addToFavourites$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addToFavourites(params: AddToFavourites$Params, context?: HttpContext): Observable<string> {
    return this.addToFavourites$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
