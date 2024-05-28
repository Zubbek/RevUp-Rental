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
import { CollectionModelRole } from '../models/collection-model-role';
import { createPropertyReferenceUsermodelPatch$Json } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-patch-json';
import { CreatePropertyReferenceUsermodelPatch$Json$Params } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-patch-json';
import { createPropertyReferenceUsermodelPatch$UriList } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-patch-uri-list';
import { CreatePropertyReferenceUsermodelPatch$UriList$Params } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-patch-uri-list';
import { createPropertyReferenceUsermodelPatch1$Json } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-patch-1-json';
import { CreatePropertyReferenceUsermodelPatch1$Json$Params } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-patch-1-json';
import { createPropertyReferenceUsermodelPatch1$UriList } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-patch-1-uri-list';
import { CreatePropertyReferenceUsermodelPatch1$UriList$Params } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-patch-1-uri-list';
import { createPropertyReferenceUsermodelPatch2$Json } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-patch-2-json';
import { CreatePropertyReferenceUsermodelPatch2$Json$Params } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-patch-2-json';
import { createPropertyReferenceUsermodelPatch2$UriList } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-patch-2-uri-list';
import { CreatePropertyReferenceUsermodelPatch2$UriList$Params } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-patch-2-uri-list';
import { createPropertyReferenceUsermodelPut$Json } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-put-json';
import { CreatePropertyReferenceUsermodelPut$Json$Params } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-put-json';
import { createPropertyReferenceUsermodelPut$UriList } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-put-uri-list';
import { CreatePropertyReferenceUsermodelPut$UriList$Params } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-put-uri-list';
import { createPropertyReferenceUsermodelPut1$Json } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-put-1-json';
import { CreatePropertyReferenceUsermodelPut1$Json$Params } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-put-1-json';
import { createPropertyReferenceUsermodelPut1$UriList } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-put-1-uri-list';
import { CreatePropertyReferenceUsermodelPut1$UriList$Params } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-put-1-uri-list';
import { createPropertyReferenceUsermodelPut2$Json } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-put-2-json';
import { CreatePropertyReferenceUsermodelPut2$Json$Params } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-put-2-json';
import { createPropertyReferenceUsermodelPut2$UriList } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-put-2-uri-list';
import { CreatePropertyReferenceUsermodelPut2$UriList$Params } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-put-2-uri-list';
import { deletePropertyReferenceIdUsermodelDelete } from '../fn/user-model-property-reference-controller/delete-property-reference-id-usermodel-delete';
import { DeletePropertyReferenceIdUsermodelDelete$Params } from '../fn/user-model-property-reference-controller/delete-property-reference-id-usermodel-delete';
import { deletePropertyReferenceIdUsermodelDelete1 } from '../fn/user-model-property-reference-controller/delete-property-reference-id-usermodel-delete-1';
import { DeletePropertyReferenceIdUsermodelDelete1$Params } from '../fn/user-model-property-reference-controller/delete-property-reference-id-usermodel-delete-1';
import { deletePropertyReferenceIdUsermodelDelete2 } from '../fn/user-model-property-reference-controller/delete-property-reference-id-usermodel-delete-2';
import { DeletePropertyReferenceIdUsermodelDelete2$Params } from '../fn/user-model-property-reference-controller/delete-property-reference-id-usermodel-delete-2';
import { deletePropertyReferenceUsermodelDelete } from '../fn/user-model-property-reference-controller/delete-property-reference-usermodel-delete';
import { DeletePropertyReferenceUsermodelDelete$Params } from '../fn/user-model-property-reference-controller/delete-property-reference-usermodel-delete';
import { deletePropertyReferenceUsermodelDelete1 } from '../fn/user-model-property-reference-controller/delete-property-reference-usermodel-delete-1';
import { DeletePropertyReferenceUsermodelDelete1$Params } from '../fn/user-model-property-reference-controller/delete-property-reference-usermodel-delete-1';
import { deletePropertyReferenceUsermodelDelete2 } from '../fn/user-model-property-reference-controller/delete-property-reference-usermodel-delete-2';
import { DeletePropertyReferenceUsermodelDelete2$Params } from '../fn/user-model-property-reference-controller/delete-property-reference-usermodel-delete-2';
import { followPropertyReferenceUsermodelGet } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get';
import { FollowPropertyReferenceUsermodelGet$Params } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get';
import { followPropertyReferenceUsermodelGet1$Json } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-1-json';
import { FollowPropertyReferenceUsermodelGet1$Json$Params } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-1-json';
import { followPropertyReferenceUsermodelGet1$UriList } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-1-uri-list';
import { FollowPropertyReferenceUsermodelGet1$UriList$Params } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-1-uri-list';
import { followPropertyReferenceUsermodelGet2 } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-2';
import { FollowPropertyReferenceUsermodelGet2$Params } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-2';
import { followPropertyReferenceUsermodelGet21$Json } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-21-json';
import { FollowPropertyReferenceUsermodelGet21$Json$Params } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-21-json';
import { followPropertyReferenceUsermodelGet21$UriList } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-21-uri-list';
import { FollowPropertyReferenceUsermodelGet21$UriList$Params } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-21-uri-list';
import { followPropertyReferenceUsermodelGet3 } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-3';
import { FollowPropertyReferenceUsermodelGet3$Params } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-3';
import { followPropertyReferenceUsermodelGet31$Json } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-31-json';
import { FollowPropertyReferenceUsermodelGet31$Json$Params } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-31-json';
import { followPropertyReferenceUsermodelGet31$UriList } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-31-uri-list';
import { FollowPropertyReferenceUsermodelGet31$UriList$Params } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-31-uri-list';

@Injectable({ providedIn: 'root' })
export class UserModelPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceUsermodelGet1()` */
  static readonly FollowPropertyReferenceUsermodelGet1Path = '/userModels/{id}/favourites';

  /**
   * get-favouritesmodel-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUsermodelGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet1$Json$Response(params: FollowPropertyReferenceUsermodelGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFavouritesModel>> {
    return followPropertyReferenceUsermodelGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-favouritesmodel-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUsermodelGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet1$Json(params: FollowPropertyReferenceUsermodelGet1$Json$Params, context?: HttpContext): Observable<CollectionModelFavouritesModel> {
    return this.followPropertyReferenceUsermodelGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelFavouritesModel>): CollectionModelFavouritesModel => r.body)
    );
  }

  /**
   * get-favouritesmodel-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUsermodelGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet1$UriList$Response(params: FollowPropertyReferenceUsermodelGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceUsermodelGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-favouritesmodel-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUsermodelGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet1$UriList(params: FollowPropertyReferenceUsermodelGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceUsermodelGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUsermodelPut()` */
  static readonly CreatePropertyReferenceUsermodelPutPath = '/userModels/{id}/favourites';

  /**
   * update-favouritesmodel-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUsermodelPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUsermodelPut$Json$Response(params: CreatePropertyReferenceUsermodelPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFavouritesModel>> {
    return createPropertyReferenceUsermodelPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-favouritesmodel-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUsermodelPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUsermodelPut$Json(params: CreatePropertyReferenceUsermodelPut$Json$Params, context?: HttpContext): Observable<CollectionModelFavouritesModel> {
    return this.createPropertyReferenceUsermodelPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelFavouritesModel>): CollectionModelFavouritesModel => r.body)
    );
  }

  /**
   * update-favouritesmodel-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUsermodelPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUsermodelPut$UriList$Response(params: CreatePropertyReferenceUsermodelPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFavouritesModel>> {
    return createPropertyReferenceUsermodelPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-favouritesmodel-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUsermodelPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUsermodelPut$UriList(params: CreatePropertyReferenceUsermodelPut$UriList$Params, context?: HttpContext): Observable<CollectionModelFavouritesModel> {
    return this.createPropertyReferenceUsermodelPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelFavouritesModel>): CollectionModelFavouritesModel => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceUsermodelDelete()` */
  static readonly DeletePropertyReferenceUsermodelDeletePath = '/userModels/{id}/favourites';

  /**
   * delete-favouritesmodel-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceUsermodelDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUsermodelDelete$Response(params: DeletePropertyReferenceUsermodelDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceUsermodelDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-favouritesmodel-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceUsermodelDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUsermodelDelete(params: DeletePropertyReferenceUsermodelDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceUsermodelDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUsermodelPatch()` */
  static readonly CreatePropertyReferenceUsermodelPatchPath = '/userModels/{id}/favourites';

  /**
   * patch-favouritesmodel-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUsermodelPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUsermodelPatch$Json$Response(params: CreatePropertyReferenceUsermodelPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFavouritesModel>> {
    return createPropertyReferenceUsermodelPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-favouritesmodel-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUsermodelPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUsermodelPatch$Json(params: CreatePropertyReferenceUsermodelPatch$Json$Params, context?: HttpContext): Observable<CollectionModelFavouritesModel> {
    return this.createPropertyReferenceUsermodelPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelFavouritesModel>): CollectionModelFavouritesModel => r.body)
    );
  }

  /**
   * patch-favouritesmodel-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUsermodelPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUsermodelPatch$UriList$Response(params: CreatePropertyReferenceUsermodelPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFavouritesModel>> {
    return createPropertyReferenceUsermodelPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-favouritesmodel-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUsermodelPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUsermodelPatch$UriList(params: CreatePropertyReferenceUsermodelPatch$UriList$Params, context?: HttpContext): Observable<CollectionModelFavouritesModel> {
    return this.createPropertyReferenceUsermodelPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelFavouritesModel>): CollectionModelFavouritesModel => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUsermodelGet()` */
  static readonly FollowPropertyReferenceUsermodelGetPath = '/userModels/{id}/favourites/{propertyId}';

  /**
   * get-favouritesmodel-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUsermodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet$Response(params: FollowPropertyReferenceUsermodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFavouritesModel>> {
    return followPropertyReferenceUsermodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-favouritesmodel-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUsermodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet(params: FollowPropertyReferenceUsermodelGet$Params, context?: HttpContext): Observable<CollectionModelFavouritesModel> {
    return this.followPropertyReferenceUsermodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelFavouritesModel>): CollectionModelFavouritesModel => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdUsermodelDelete()` */
  static readonly DeletePropertyReferenceIdUsermodelDeletePath = '/userModels/{id}/favourites/{propertyId}';

  /**
   * delete-favouritesmodel-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdUsermodelDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUsermodelDelete$Response(params: DeletePropertyReferenceIdUsermodelDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdUsermodelDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-favouritesmodel-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdUsermodelDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUsermodelDelete(params: DeletePropertyReferenceIdUsermodelDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdUsermodelDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUsermodelGet21()` */
  static readonly FollowPropertyReferenceUsermodelGet21Path = '/userModels/{id}/reservations';

  /**
   * get-reservationmodel-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUsermodelGet21$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet21$Json$Response(params: FollowPropertyReferenceUsermodelGet21$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelReservationModel>> {
    return followPropertyReferenceUsermodelGet21$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-reservationmodel-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUsermodelGet21$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet21$Json(params: FollowPropertyReferenceUsermodelGet21$Json$Params, context?: HttpContext): Observable<CollectionModelReservationModel> {
    return this.followPropertyReferenceUsermodelGet21$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelReservationModel>): CollectionModelReservationModel => r.body)
    );
  }

  /**
   * get-reservationmodel-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUsermodelGet21$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet21$UriList$Response(params: FollowPropertyReferenceUsermodelGet21$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceUsermodelGet21$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-reservationmodel-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUsermodelGet21$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet21$UriList(params: FollowPropertyReferenceUsermodelGet21$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceUsermodelGet21$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUsermodelPut1()` */
  static readonly CreatePropertyReferenceUsermodelPut1Path = '/userModels/{id}/reservations';

  /**
   * update-reservationmodel-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUsermodelPut1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUsermodelPut1$Json$Response(params: CreatePropertyReferenceUsermodelPut1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelReservationModel>> {
    return createPropertyReferenceUsermodelPut1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-reservationmodel-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUsermodelPut1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUsermodelPut1$Json(params: CreatePropertyReferenceUsermodelPut1$Json$Params, context?: HttpContext): Observable<CollectionModelReservationModel> {
    return this.createPropertyReferenceUsermodelPut1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelReservationModel>): CollectionModelReservationModel => r.body)
    );
  }

  /**
   * update-reservationmodel-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUsermodelPut1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUsermodelPut1$UriList$Response(params: CreatePropertyReferenceUsermodelPut1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelReservationModel>> {
    return createPropertyReferenceUsermodelPut1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-reservationmodel-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUsermodelPut1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUsermodelPut1$UriList(params: CreatePropertyReferenceUsermodelPut1$UriList$Params, context?: HttpContext): Observable<CollectionModelReservationModel> {
    return this.createPropertyReferenceUsermodelPut1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelReservationModel>): CollectionModelReservationModel => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceUsermodelDelete1()` */
  static readonly DeletePropertyReferenceUsermodelDelete1Path = '/userModels/{id}/reservations';

  /**
   * delete-reservationmodel-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceUsermodelDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUsermodelDelete1$Response(params: DeletePropertyReferenceUsermodelDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceUsermodelDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-reservationmodel-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceUsermodelDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUsermodelDelete1(params: DeletePropertyReferenceUsermodelDelete1$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceUsermodelDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUsermodelPatch1()` */
  static readonly CreatePropertyReferenceUsermodelPatch1Path = '/userModels/{id}/reservations';

  /**
   * patch-reservationmodel-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUsermodelPatch1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUsermodelPatch1$Json$Response(params: CreatePropertyReferenceUsermodelPatch1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelReservationModel>> {
    return createPropertyReferenceUsermodelPatch1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-reservationmodel-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUsermodelPatch1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUsermodelPatch1$Json(params: CreatePropertyReferenceUsermodelPatch1$Json$Params, context?: HttpContext): Observable<CollectionModelReservationModel> {
    return this.createPropertyReferenceUsermodelPatch1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelReservationModel>): CollectionModelReservationModel => r.body)
    );
  }

  /**
   * patch-reservationmodel-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUsermodelPatch1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUsermodelPatch1$UriList$Response(params: CreatePropertyReferenceUsermodelPatch1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelReservationModel>> {
    return createPropertyReferenceUsermodelPatch1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-reservationmodel-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUsermodelPatch1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUsermodelPatch1$UriList(params: CreatePropertyReferenceUsermodelPatch1$UriList$Params, context?: HttpContext): Observable<CollectionModelReservationModel> {
    return this.createPropertyReferenceUsermodelPatch1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelReservationModel>): CollectionModelReservationModel => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUsermodelGet2()` */
  static readonly FollowPropertyReferenceUsermodelGet2Path = '/userModels/{id}/reservations/{propertyId}';

  /**
   * get-reservationmodel-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUsermodelGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet2$Response(params: FollowPropertyReferenceUsermodelGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelReservationModel>> {
    return followPropertyReferenceUsermodelGet2(this.http, this.rootUrl, params, context);
  }

  /**
   * get-reservationmodel-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUsermodelGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet2(params: FollowPropertyReferenceUsermodelGet2$Params, context?: HttpContext): Observable<CollectionModelReservationModel> {
    return this.followPropertyReferenceUsermodelGet2$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelReservationModel>): CollectionModelReservationModel => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdUsermodelDelete1()` */
  static readonly DeletePropertyReferenceIdUsermodelDelete1Path = '/userModels/{id}/reservations/{propertyId}';

  /**
   * delete-reservationmodel-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdUsermodelDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUsermodelDelete1$Response(params: DeletePropertyReferenceIdUsermodelDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdUsermodelDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-reservationmodel-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdUsermodelDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUsermodelDelete1(params: DeletePropertyReferenceIdUsermodelDelete1$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdUsermodelDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUsermodelGet31()` */
  static readonly FollowPropertyReferenceUsermodelGet31Path = '/userModels/{id}/roles';

  /**
   * get-role-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUsermodelGet31$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet31$Json$Response(params: FollowPropertyReferenceUsermodelGet31$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return followPropertyReferenceUsermodelGet31$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-role-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUsermodelGet31$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet31$Json(params: FollowPropertyReferenceUsermodelGet31$Json$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.followPropertyReferenceUsermodelGet31$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /**
   * get-role-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUsermodelGet31$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet31$UriList$Response(params: FollowPropertyReferenceUsermodelGet31$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceUsermodelGet31$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-role-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUsermodelGet31$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet31$UriList(params: FollowPropertyReferenceUsermodelGet31$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceUsermodelGet31$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUsermodelPut2()` */
  static readonly CreatePropertyReferenceUsermodelPut2Path = '/userModels/{id}/roles';

  /**
   * update-role-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUsermodelPut2$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUsermodelPut2$Json$Response(params: CreatePropertyReferenceUsermodelPut2$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return createPropertyReferenceUsermodelPut2$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-role-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUsermodelPut2$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUsermodelPut2$Json(params: CreatePropertyReferenceUsermodelPut2$Json$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.createPropertyReferenceUsermodelPut2$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /**
   * update-role-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUsermodelPut2$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUsermodelPut2$UriList$Response(params: CreatePropertyReferenceUsermodelPut2$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return createPropertyReferenceUsermodelPut2$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-role-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUsermodelPut2$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUsermodelPut2$UriList(params: CreatePropertyReferenceUsermodelPut2$UriList$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.createPropertyReferenceUsermodelPut2$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceUsermodelDelete2()` */
  static readonly DeletePropertyReferenceUsermodelDelete2Path = '/userModels/{id}/roles';

  /**
   * delete-role-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceUsermodelDelete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUsermodelDelete2$Response(params: DeletePropertyReferenceUsermodelDelete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceUsermodelDelete2(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-role-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceUsermodelDelete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUsermodelDelete2(params: DeletePropertyReferenceUsermodelDelete2$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceUsermodelDelete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUsermodelPatch2()` */
  static readonly CreatePropertyReferenceUsermodelPatch2Path = '/userModels/{id}/roles';

  /**
   * patch-role-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUsermodelPatch2$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUsermodelPatch2$Json$Response(params: CreatePropertyReferenceUsermodelPatch2$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return createPropertyReferenceUsermodelPatch2$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-role-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUsermodelPatch2$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUsermodelPatch2$Json(params: CreatePropertyReferenceUsermodelPatch2$Json$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.createPropertyReferenceUsermodelPatch2$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /**
   * patch-role-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUsermodelPatch2$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUsermodelPatch2$UriList$Response(params: CreatePropertyReferenceUsermodelPatch2$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return createPropertyReferenceUsermodelPatch2$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-role-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUsermodelPatch2$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUsermodelPatch2$UriList(params: CreatePropertyReferenceUsermodelPatch2$UriList$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.createPropertyReferenceUsermodelPatch2$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUsermodelGet3()` */
  static readonly FollowPropertyReferenceUsermodelGet3Path = '/userModels/{id}/roles/{propertyId}';

  /**
   * get-role-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUsermodelGet3()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet3$Response(params: FollowPropertyReferenceUsermodelGet3$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return followPropertyReferenceUsermodelGet3(this.http, this.rootUrl, params, context);
  }

  /**
   * get-role-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUsermodelGet3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet3(params: FollowPropertyReferenceUsermodelGet3$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.followPropertyReferenceUsermodelGet3$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdUsermodelDelete2()` */
  static readonly DeletePropertyReferenceIdUsermodelDelete2Path = '/userModels/{id}/roles/{propertyId}';

  /**
   * delete-role-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdUsermodelDelete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUsermodelDelete2$Response(params: DeletePropertyReferenceIdUsermodelDelete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdUsermodelDelete2(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-role-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdUsermodelDelete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUsermodelDelete2(params: DeletePropertyReferenceIdUsermodelDelete2$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdUsermodelDelete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
