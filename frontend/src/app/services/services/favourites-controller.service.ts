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
import { deleteMotorcycleFromFavourites } from '../fn/favourites-controller/delete-motorcycle-from-favourites';
import { DeleteMotorcycleFromFavourites$Params } from '../fn/favourites-controller/delete-motorcycle-from-favourites';
import { getAllFavouriteMotorcyclesForCurrentUser } from '../fn/favourites-controller/get-all-favourite-motorcycles-for-current-user';
import { GetAllFavouriteMotorcyclesForCurrentUser$Params } from '../fn/favourites-controller/get-all-favourite-motorcycles-for-current-user';
import { MotorcycleModel } from '../models/motorcycle-model';

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

  /** Path part for operation `getAllFavouriteMotorcyclesForCurrentUser()` */
  static readonly GetAllFavouriteMotorcyclesForCurrentUserPath = '/api/favourites';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllFavouriteMotorcyclesForCurrentUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllFavouriteMotorcyclesForCurrentUser$Response(params?: GetAllFavouriteMotorcyclesForCurrentUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MotorcycleModel>>> {
    return getAllFavouriteMotorcyclesForCurrentUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllFavouriteMotorcyclesForCurrentUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllFavouriteMotorcyclesForCurrentUser(params?: GetAllFavouriteMotorcyclesForCurrentUser$Params, context?: HttpContext): Observable<Array<MotorcycleModel>> {
    return this.getAllFavouriteMotorcyclesForCurrentUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MotorcycleModel>>): Array<MotorcycleModel> => r.body)
    );
  }

  /** Path part for operation `deleteMotorcycleFromFavourites()` */
  static readonly DeleteMotorcycleFromFavouritesPath = '/api/favourites';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteMotorcycleFromFavourites()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteMotorcycleFromFavourites$Response(params: DeleteMotorcycleFromFavourites$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteMotorcycleFromFavourites(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteMotorcycleFromFavourites$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteMotorcycleFromFavourites(params: DeleteMotorcycleFromFavourites$Params, context?: HttpContext): Observable<string> {
    return this.deleteMotorcycleFromFavourites$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
