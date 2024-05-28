/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollectionModelFavouritesModel } from '../models/collection-model-favourites-model';
import { CollectionModelReservationModel } from '../models/collection-model-reservation-model';
import { createPropertyReferenceMotorcyclemodelPatch$Json } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-patch-json';
import { CreatePropertyReferenceMotorcyclemodelPatch$Json$Params } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-patch-json';
import { createPropertyReferenceMotorcyclemodelPatch$UriList } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-patch-uri-list';
import { CreatePropertyReferenceMotorcyclemodelPatch$UriList$Params } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-patch-uri-list';
import { createPropertyReferenceMotorcyclemodelPatch1$Json } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-patch-1-json';
import { CreatePropertyReferenceMotorcyclemodelPatch1$Json$Params } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-patch-1-json';
import { createPropertyReferenceMotorcyclemodelPatch1$UriList } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-patch-1-uri-list';
import { CreatePropertyReferenceMotorcyclemodelPatch1$UriList$Params } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-patch-1-uri-list';
import { createPropertyReferenceMotorcyclemodelPut$Json } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-put-json';
import { CreatePropertyReferenceMotorcyclemodelPut$Json$Params } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-put-json';
import { createPropertyReferenceMotorcyclemodelPut$UriList } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-put-uri-list';
import { CreatePropertyReferenceMotorcyclemodelPut$UriList$Params } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-put-uri-list';
import { createPropertyReferenceMotorcyclemodelPut1$Json } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-put-1-json';
import { CreatePropertyReferenceMotorcyclemodelPut1$Json$Params } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-put-1-json';
import { createPropertyReferenceMotorcyclemodelPut1$UriList } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-put-1-uri-list';
import { CreatePropertyReferenceMotorcyclemodelPut1$UriList$Params } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-put-1-uri-list';
import { deletePropertyReferenceIdMotorcyclemodelDelete } from '../fn/motorcycle-model-property-reference-controller/delete-property-reference-id-motorcyclemodel-delete';
import { DeletePropertyReferenceIdMotorcyclemodelDelete$Params } from '../fn/motorcycle-model-property-reference-controller/delete-property-reference-id-motorcyclemodel-delete';
import { deletePropertyReferenceIdMotorcyclemodelDelete1 } from '../fn/motorcycle-model-property-reference-controller/delete-property-reference-id-motorcyclemodel-delete-1';
import { DeletePropertyReferenceIdMotorcyclemodelDelete1$Params } from '../fn/motorcycle-model-property-reference-controller/delete-property-reference-id-motorcyclemodel-delete-1';
import { deletePropertyReferenceMotorcyclemodelDelete } from '../fn/motorcycle-model-property-reference-controller/delete-property-reference-motorcyclemodel-delete';
import { DeletePropertyReferenceMotorcyclemodelDelete$Params } from '../fn/motorcycle-model-property-reference-controller/delete-property-reference-motorcyclemodel-delete';
import { deletePropertyReferenceMotorcyclemodelDelete1 } from '../fn/motorcycle-model-property-reference-controller/delete-property-reference-motorcyclemodel-delete-1';
import { DeletePropertyReferenceMotorcyclemodelDelete1$Params } from '../fn/motorcycle-model-property-reference-controller/delete-property-reference-motorcyclemodel-delete-1';
import { followPropertyReferenceMotorcyclemodelGet } from '../fn/motorcycle-model-property-reference-controller/follow-property-reference-motorcyclemodel-get';
import { FollowPropertyReferenceMotorcyclemodelGet$Params } from '../fn/motorcycle-model-property-reference-controller/follow-property-reference-motorcyclemodel-get';
import { followPropertyReferenceMotorcyclemodelGet1$Json } from '../fn/motorcycle-model-property-reference-controller/follow-property-reference-motorcyclemodel-get-1-json';
import { FollowPropertyReferenceMotorcyclemodelGet1$Json$Params } from '../fn/motorcycle-model-property-reference-controller/follow-property-reference-motorcyclemodel-get-1-json';
import { followPropertyReferenceMotorcyclemodelGet1$UriList } from '../fn/motorcycle-model-property-reference-controller/follow-property-reference-motorcyclemodel-get-1-uri-list';
import { FollowPropertyReferenceMotorcyclemodelGet1$UriList$Params } from '../fn/motorcycle-model-property-reference-controller/follow-property-reference-motorcyclemodel-get-1-uri-list';
import { followPropertyReferenceMotorcyclemodelGet2 } from '../fn/motorcycle-model-property-reference-controller/follow-property-reference-motorcyclemodel-get-2';
import { FollowPropertyReferenceMotorcyclemodelGet2$Params } from '../fn/motorcycle-model-property-reference-controller/follow-property-reference-motorcyclemodel-get-2';
import { followPropertyReferenceMotorcyclemodelGet21$Json } from '../fn/motorcycle-model-property-reference-controller/follow-property-reference-motorcyclemodel-get-21-json';
import { FollowPropertyReferenceMotorcyclemodelGet21$Json$Params } from '../fn/motorcycle-model-property-reference-controller/follow-property-reference-motorcyclemodel-get-21-json';
import { followPropertyReferenceMotorcyclemodelGet21$UriList } from '../fn/motorcycle-model-property-reference-controller/follow-property-reference-motorcyclemodel-get-21-uri-list';
import { FollowPropertyReferenceMotorcyclemodelGet21$UriList$Params } from '../fn/motorcycle-model-property-reference-controller/follow-property-reference-motorcyclemodel-get-21-uri-list';

@Injectable({ providedIn: 'root' })
export class MotorcycleModelPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceMotorcyclemodelGet1()` */
  static readonly FollowPropertyReferenceMotorcyclemodelGet1Path = '/motorcycleModels/{id}/favourites';

  /**
   * get-favouritesmodel-by-motorcyclemodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceMotorcyclemodelGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMotorcyclemodelGet1$Json$Response(params: FollowPropertyReferenceMotorcyclemodelGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFavouritesModel>> {
    return followPropertyReferenceMotorcyclemodelGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-favouritesmodel-by-motorcyclemodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceMotorcyclemodelGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMotorcyclemodelGet1$Json(params: FollowPropertyReferenceMotorcyclemodelGet1$Json$Params, context?: HttpContext): Observable<CollectionModelFavouritesModel> {
    return this.followPropertyReferenceMotorcyclemodelGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelFavouritesModel>): CollectionModelFavouritesModel => r.body)
    );
  }

  /**
   * get-favouritesmodel-by-motorcyclemodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceMotorcyclemodelGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMotorcyclemodelGet1$UriList$Response(params: FollowPropertyReferenceMotorcyclemodelGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceMotorcyclemodelGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-favouritesmodel-by-motorcyclemodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceMotorcyclemodelGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMotorcyclemodelGet1$UriList(params: FollowPropertyReferenceMotorcyclemodelGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceMotorcyclemodelGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceMotorcyclemodelPut()` */
  static readonly CreatePropertyReferenceMotorcyclemodelPutPath = '/motorcycleModels/{id}/favourites';

  /**
   * update-favouritesmodel-by-motorcyclemodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMotorcyclemodelPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMotorcyclemodelPut$Json$Response(params: CreatePropertyReferenceMotorcyclemodelPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFavouritesModel>> {
    return createPropertyReferenceMotorcyclemodelPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-favouritesmodel-by-motorcyclemodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMotorcyclemodelPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMotorcyclemodelPut$Json(params: CreatePropertyReferenceMotorcyclemodelPut$Json$Params, context?: HttpContext): Observable<CollectionModelFavouritesModel> {
    return this.createPropertyReferenceMotorcyclemodelPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelFavouritesModel>): CollectionModelFavouritesModel => r.body)
    );
  }

  /**
   * update-favouritesmodel-by-motorcyclemodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMotorcyclemodelPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMotorcyclemodelPut$UriList$Response(params: CreatePropertyReferenceMotorcyclemodelPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFavouritesModel>> {
    return createPropertyReferenceMotorcyclemodelPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-favouritesmodel-by-motorcyclemodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMotorcyclemodelPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMotorcyclemodelPut$UriList(params: CreatePropertyReferenceMotorcyclemodelPut$UriList$Params, context?: HttpContext): Observable<CollectionModelFavouritesModel> {
    return this.createPropertyReferenceMotorcyclemodelPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelFavouritesModel>): CollectionModelFavouritesModel => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceMotorcyclemodelDelete()` */
  static readonly DeletePropertyReferenceMotorcyclemodelDeletePath = '/motorcycleModels/{id}/favourites';

  /**
   * delete-favouritesmodel-by-motorcyclemodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceMotorcyclemodelDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceMotorcyclemodelDelete$Response(params: DeletePropertyReferenceMotorcyclemodelDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceMotorcyclemodelDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-favouritesmodel-by-motorcyclemodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceMotorcyclemodelDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceMotorcyclemodelDelete(params: DeletePropertyReferenceMotorcyclemodelDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceMotorcyclemodelDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceMotorcyclemodelPatch()` */
  static readonly CreatePropertyReferenceMotorcyclemodelPatchPath = '/motorcycleModels/{id}/favourites';

  /**
   * patch-favouritesmodel-by-motorcyclemodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMotorcyclemodelPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMotorcyclemodelPatch$Json$Response(params: CreatePropertyReferenceMotorcyclemodelPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFavouritesModel>> {
    return createPropertyReferenceMotorcyclemodelPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-favouritesmodel-by-motorcyclemodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMotorcyclemodelPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMotorcyclemodelPatch$Json(params: CreatePropertyReferenceMotorcyclemodelPatch$Json$Params, context?: HttpContext): Observable<CollectionModelFavouritesModel> {
    return this.createPropertyReferenceMotorcyclemodelPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelFavouritesModel>): CollectionModelFavouritesModel => r.body)
    );
  }

  /**
   * patch-favouritesmodel-by-motorcyclemodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMotorcyclemodelPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMotorcyclemodelPatch$UriList$Response(params: CreatePropertyReferenceMotorcyclemodelPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFavouritesModel>> {
    return createPropertyReferenceMotorcyclemodelPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-favouritesmodel-by-motorcyclemodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMotorcyclemodelPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMotorcyclemodelPatch$UriList(params: CreatePropertyReferenceMotorcyclemodelPatch$UriList$Params, context?: HttpContext): Observable<CollectionModelFavouritesModel> {
    return this.createPropertyReferenceMotorcyclemodelPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelFavouritesModel>): CollectionModelFavouritesModel => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceMotorcyclemodelGet()` */
  static readonly FollowPropertyReferenceMotorcyclemodelGetPath = '/motorcycleModels/{id}/favourites/{propertyId}';

  /**
   * get-favouritesmodel-by-motorcyclemodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceMotorcyclemodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMotorcyclemodelGet$Response(params: FollowPropertyReferenceMotorcyclemodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFavouritesModel>> {
    return followPropertyReferenceMotorcyclemodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-favouritesmodel-by-motorcyclemodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceMotorcyclemodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMotorcyclemodelGet(params: FollowPropertyReferenceMotorcyclemodelGet$Params, context?: HttpContext): Observable<CollectionModelFavouritesModel> {
    return this.followPropertyReferenceMotorcyclemodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelFavouritesModel>): CollectionModelFavouritesModel => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdMotorcyclemodelDelete()` */
  static readonly DeletePropertyReferenceIdMotorcyclemodelDeletePath = '/motorcycleModels/{id}/favourites/{propertyId}';

  /**
   * delete-favouritesmodel-by-motorcyclemodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdMotorcyclemodelDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdMotorcyclemodelDelete$Response(params: DeletePropertyReferenceIdMotorcyclemodelDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdMotorcyclemodelDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-favouritesmodel-by-motorcyclemodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdMotorcyclemodelDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdMotorcyclemodelDelete(params: DeletePropertyReferenceIdMotorcyclemodelDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdMotorcyclemodelDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceMotorcyclemodelGet21()` */
  static readonly FollowPropertyReferenceMotorcyclemodelGet21Path = '/motorcycleModels/{id}/reservations';

  /**
   * get-reservationmodel-by-motorcyclemodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceMotorcyclemodelGet21$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMotorcyclemodelGet21$Json$Response(params: FollowPropertyReferenceMotorcyclemodelGet21$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelReservationModel>> {
    return followPropertyReferenceMotorcyclemodelGet21$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-reservationmodel-by-motorcyclemodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceMotorcyclemodelGet21$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMotorcyclemodelGet21$Json(params: FollowPropertyReferenceMotorcyclemodelGet21$Json$Params, context?: HttpContext): Observable<CollectionModelReservationModel> {
    return this.followPropertyReferenceMotorcyclemodelGet21$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelReservationModel>): CollectionModelReservationModel => r.body)
    );
  }

  /**
   * get-reservationmodel-by-motorcyclemodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceMotorcyclemodelGet21$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMotorcyclemodelGet21$UriList$Response(params: FollowPropertyReferenceMotorcyclemodelGet21$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceMotorcyclemodelGet21$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-reservationmodel-by-motorcyclemodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceMotorcyclemodelGet21$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMotorcyclemodelGet21$UriList(params: FollowPropertyReferenceMotorcyclemodelGet21$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceMotorcyclemodelGet21$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceMotorcyclemodelPut1()` */
  static readonly CreatePropertyReferenceMotorcyclemodelPut1Path = '/motorcycleModels/{id}/reservations';

  /**
   * update-reservationmodel-by-motorcyclemodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMotorcyclemodelPut1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMotorcyclemodelPut1$Json$Response(params: CreatePropertyReferenceMotorcyclemodelPut1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelReservationModel>> {
    return createPropertyReferenceMotorcyclemodelPut1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-reservationmodel-by-motorcyclemodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMotorcyclemodelPut1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMotorcyclemodelPut1$Json(params: CreatePropertyReferenceMotorcyclemodelPut1$Json$Params, context?: HttpContext): Observable<CollectionModelReservationModel> {
    return this.createPropertyReferenceMotorcyclemodelPut1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelReservationModel>): CollectionModelReservationModel => r.body)
    );
  }

  /**
   * update-reservationmodel-by-motorcyclemodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMotorcyclemodelPut1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMotorcyclemodelPut1$UriList$Response(params: CreatePropertyReferenceMotorcyclemodelPut1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelReservationModel>> {
    return createPropertyReferenceMotorcyclemodelPut1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-reservationmodel-by-motorcyclemodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMotorcyclemodelPut1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMotorcyclemodelPut1$UriList(params: CreatePropertyReferenceMotorcyclemodelPut1$UriList$Params, context?: HttpContext): Observable<CollectionModelReservationModel> {
    return this.createPropertyReferenceMotorcyclemodelPut1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelReservationModel>): CollectionModelReservationModel => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceMotorcyclemodelDelete1()` */
  static readonly DeletePropertyReferenceMotorcyclemodelDelete1Path = '/motorcycleModels/{id}/reservations';

  /**
   * delete-reservationmodel-by-motorcyclemodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceMotorcyclemodelDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceMotorcyclemodelDelete1$Response(params: DeletePropertyReferenceMotorcyclemodelDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceMotorcyclemodelDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-reservationmodel-by-motorcyclemodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceMotorcyclemodelDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceMotorcyclemodelDelete1(params: DeletePropertyReferenceMotorcyclemodelDelete1$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceMotorcyclemodelDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceMotorcyclemodelPatch1()` */
  static readonly CreatePropertyReferenceMotorcyclemodelPatch1Path = '/motorcycleModels/{id}/reservations';

  /**
   * patch-reservationmodel-by-motorcyclemodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMotorcyclemodelPatch1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMotorcyclemodelPatch1$Json$Response(params: CreatePropertyReferenceMotorcyclemodelPatch1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelReservationModel>> {
    return createPropertyReferenceMotorcyclemodelPatch1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-reservationmodel-by-motorcyclemodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMotorcyclemodelPatch1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMotorcyclemodelPatch1$Json(params: CreatePropertyReferenceMotorcyclemodelPatch1$Json$Params, context?: HttpContext): Observable<CollectionModelReservationModel> {
    return this.createPropertyReferenceMotorcyclemodelPatch1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelReservationModel>): CollectionModelReservationModel => r.body)
    );
  }

  /**
   * patch-reservationmodel-by-motorcyclemodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMotorcyclemodelPatch1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMotorcyclemodelPatch1$UriList$Response(params: CreatePropertyReferenceMotorcyclemodelPatch1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelReservationModel>> {
    return createPropertyReferenceMotorcyclemodelPatch1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-reservationmodel-by-motorcyclemodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMotorcyclemodelPatch1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMotorcyclemodelPatch1$UriList(params: CreatePropertyReferenceMotorcyclemodelPatch1$UriList$Params, context?: HttpContext): Observable<CollectionModelReservationModel> {
    return this.createPropertyReferenceMotorcyclemodelPatch1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelReservationModel>): CollectionModelReservationModel => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceMotorcyclemodelGet2()` */
  static readonly FollowPropertyReferenceMotorcyclemodelGet2Path = '/motorcycleModels/{id}/reservations/{propertyId}';

  /**
   * get-reservationmodel-by-motorcyclemodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceMotorcyclemodelGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMotorcyclemodelGet2$Response(params: FollowPropertyReferenceMotorcyclemodelGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelReservationModel>> {
    return followPropertyReferenceMotorcyclemodelGet2(this.http, this.rootUrl, params, context);
  }

  /**
   * get-reservationmodel-by-motorcyclemodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceMotorcyclemodelGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMotorcyclemodelGet2(params: FollowPropertyReferenceMotorcyclemodelGet2$Params, context?: HttpContext): Observable<CollectionModelReservationModel> {
    return this.followPropertyReferenceMotorcyclemodelGet2$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelReservationModel>): CollectionModelReservationModel => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdMotorcyclemodelDelete1()` */
  static readonly DeletePropertyReferenceIdMotorcyclemodelDelete1Path = '/motorcycleModels/{id}/reservations/{propertyId}';

  /**
   * delete-reservationmodel-by-motorcyclemodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdMotorcyclemodelDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdMotorcyclemodelDelete1$Response(params: DeletePropertyReferenceIdMotorcyclemodelDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdMotorcyclemodelDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-reservationmodel-by-motorcyclemodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdMotorcyclemodelDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdMotorcyclemodelDelete1(params: DeletePropertyReferenceIdMotorcyclemodelDelete1$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdMotorcyclemodelDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
