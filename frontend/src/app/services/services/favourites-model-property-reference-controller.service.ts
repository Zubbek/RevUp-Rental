/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPropertyReferenceFavouritesmodelPatch$Json } from '../fn/favourites-model-property-reference-controller/create-property-reference-favouritesmodel-patch-json';
import { CreatePropertyReferenceFavouritesmodelPatch$Json$Params } from '../fn/favourites-model-property-reference-controller/create-property-reference-favouritesmodel-patch-json';
import { createPropertyReferenceFavouritesmodelPatch$UriList } from '../fn/favourites-model-property-reference-controller/create-property-reference-favouritesmodel-patch-uri-list';
import { CreatePropertyReferenceFavouritesmodelPatch$UriList$Params } from '../fn/favourites-model-property-reference-controller/create-property-reference-favouritesmodel-patch-uri-list';
import { createPropertyReferenceFavouritesmodelPatch1$Json } from '../fn/favourites-model-property-reference-controller/create-property-reference-favouritesmodel-patch-1-json';
import { CreatePropertyReferenceFavouritesmodelPatch1$Json$Params } from '../fn/favourites-model-property-reference-controller/create-property-reference-favouritesmodel-patch-1-json';
import { createPropertyReferenceFavouritesmodelPatch1$UriList } from '../fn/favourites-model-property-reference-controller/create-property-reference-favouritesmodel-patch-1-uri-list';
import { CreatePropertyReferenceFavouritesmodelPatch1$UriList$Params } from '../fn/favourites-model-property-reference-controller/create-property-reference-favouritesmodel-patch-1-uri-list';
import { createPropertyReferenceFavouritesmodelPut$Json } from '../fn/favourites-model-property-reference-controller/create-property-reference-favouritesmodel-put-json';
import { CreatePropertyReferenceFavouritesmodelPut$Json$Params } from '../fn/favourites-model-property-reference-controller/create-property-reference-favouritesmodel-put-json';
import { createPropertyReferenceFavouritesmodelPut$UriList } from '../fn/favourites-model-property-reference-controller/create-property-reference-favouritesmodel-put-uri-list';
import { CreatePropertyReferenceFavouritesmodelPut$UriList$Params } from '../fn/favourites-model-property-reference-controller/create-property-reference-favouritesmodel-put-uri-list';
import { createPropertyReferenceFavouritesmodelPut1$Json } from '../fn/favourites-model-property-reference-controller/create-property-reference-favouritesmodel-put-1-json';
import { CreatePropertyReferenceFavouritesmodelPut1$Json$Params } from '../fn/favourites-model-property-reference-controller/create-property-reference-favouritesmodel-put-1-json';
import { createPropertyReferenceFavouritesmodelPut1$UriList } from '../fn/favourites-model-property-reference-controller/create-property-reference-favouritesmodel-put-1-uri-list';
import { CreatePropertyReferenceFavouritesmodelPut1$UriList$Params } from '../fn/favourites-model-property-reference-controller/create-property-reference-favouritesmodel-put-1-uri-list';
import { deletePropertyReferenceFavouritesmodelDelete } from '../fn/favourites-model-property-reference-controller/delete-property-reference-favouritesmodel-delete';
import { DeletePropertyReferenceFavouritesmodelDelete$Params } from '../fn/favourites-model-property-reference-controller/delete-property-reference-favouritesmodel-delete';
import { deletePropertyReferenceFavouritesmodelDelete1 } from '../fn/favourites-model-property-reference-controller/delete-property-reference-favouritesmodel-delete-1';
import { DeletePropertyReferenceFavouritesmodelDelete1$Params } from '../fn/favourites-model-property-reference-controller/delete-property-reference-favouritesmodel-delete-1';
import { deletePropertyReferenceIdFavouritesmodelDelete } from '../fn/favourites-model-property-reference-controller/delete-property-reference-id-favouritesmodel-delete';
import { DeletePropertyReferenceIdFavouritesmodelDelete$Params } from '../fn/favourites-model-property-reference-controller/delete-property-reference-id-favouritesmodel-delete';
import { deletePropertyReferenceIdFavouritesmodelDelete1 } from '../fn/favourites-model-property-reference-controller/delete-property-reference-id-favouritesmodel-delete-1';
import { DeletePropertyReferenceIdFavouritesmodelDelete1$Params } from '../fn/favourites-model-property-reference-controller/delete-property-reference-id-favouritesmodel-delete-1';
import { EntityModelMotorcycleModel } from '../models/entity-model-motorcycle-model';
import { EntityModelUserModel } from '../models/entity-model-user-model';
import { followPropertyReferenceFavouritesmodelGet } from '../fn/favourites-model-property-reference-controller/follow-property-reference-favouritesmodel-get';
import { FollowPropertyReferenceFavouritesmodelGet$Params } from '../fn/favourites-model-property-reference-controller/follow-property-reference-favouritesmodel-get';
import { followPropertyReferenceFavouritesmodelGet1$Json } from '../fn/favourites-model-property-reference-controller/follow-property-reference-favouritesmodel-get-1-json';
import { FollowPropertyReferenceFavouritesmodelGet1$Json$Params } from '../fn/favourites-model-property-reference-controller/follow-property-reference-favouritesmodel-get-1-json';
import { followPropertyReferenceFavouritesmodelGet1$UriList } from '../fn/favourites-model-property-reference-controller/follow-property-reference-favouritesmodel-get-1-uri-list';
import { FollowPropertyReferenceFavouritesmodelGet1$UriList$Params } from '../fn/favourites-model-property-reference-controller/follow-property-reference-favouritesmodel-get-1-uri-list';
import { followPropertyReferenceFavouritesmodelGet2 } from '../fn/favourites-model-property-reference-controller/follow-property-reference-favouritesmodel-get-2';
import { FollowPropertyReferenceFavouritesmodelGet2$Params } from '../fn/favourites-model-property-reference-controller/follow-property-reference-favouritesmodel-get-2';
import { followPropertyReferenceFavouritesmodelGet21$Json } from '../fn/favourites-model-property-reference-controller/follow-property-reference-favouritesmodel-get-21-json';
import { FollowPropertyReferenceFavouritesmodelGet21$Json$Params } from '../fn/favourites-model-property-reference-controller/follow-property-reference-favouritesmodel-get-21-json';
import { followPropertyReferenceFavouritesmodelGet21$UriList } from '../fn/favourites-model-property-reference-controller/follow-property-reference-favouritesmodel-get-21-uri-list';
import { FollowPropertyReferenceFavouritesmodelGet21$UriList$Params } from '../fn/favourites-model-property-reference-controller/follow-property-reference-favouritesmodel-get-21-uri-list';

@Injectable({ providedIn: 'root' })
export class FavouritesModelPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceFavouritesmodelGet1()` */
  static readonly FollowPropertyReferenceFavouritesmodelGet1Path = '/favouritesModels/{id}/motorcycle';

  /**
   * get-motorcyclemodel-by-favouritesmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceFavouritesmodelGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritesmodelGet1$Json$Response(params: FollowPropertyReferenceFavouritesmodelGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
    return followPropertyReferenceFavouritesmodelGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-motorcyclemodel-by-favouritesmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceFavouritesmodelGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritesmodelGet1$Json(params: FollowPropertyReferenceFavouritesmodelGet1$Json$Params, context?: HttpContext): Observable<EntityModelMotorcycleModel> {
    return this.followPropertyReferenceFavouritesmodelGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleModel>): EntityModelMotorcycleModel => r.body)
    );
  }

  /**
   * get-motorcyclemodel-by-favouritesmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceFavouritesmodelGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritesmodelGet1$UriList$Response(params: FollowPropertyReferenceFavouritesmodelGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceFavouritesmodelGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-motorcyclemodel-by-favouritesmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceFavouritesmodelGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritesmodelGet1$UriList(params: FollowPropertyReferenceFavouritesmodelGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceFavouritesmodelGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceFavouritesmodelPut()` */
  static readonly CreatePropertyReferenceFavouritesmodelPutPath = '/favouritesModels/{id}/motorcycle';

  /**
   * update-motorcyclemodel-by-favouritesmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFavouritesmodelPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFavouritesmodelPut$Json$Response(params: CreatePropertyReferenceFavouritesmodelPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
    return createPropertyReferenceFavouritesmodelPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-motorcyclemodel-by-favouritesmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFavouritesmodelPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFavouritesmodelPut$Json(params: CreatePropertyReferenceFavouritesmodelPut$Json$Params, context?: HttpContext): Observable<EntityModelMotorcycleModel> {
    return this.createPropertyReferenceFavouritesmodelPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleModel>): EntityModelMotorcycleModel => r.body)
    );
  }

  /**
   * update-motorcyclemodel-by-favouritesmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFavouritesmodelPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFavouritesmodelPut$UriList$Response(params: CreatePropertyReferenceFavouritesmodelPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
    return createPropertyReferenceFavouritesmodelPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-motorcyclemodel-by-favouritesmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFavouritesmodelPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFavouritesmodelPut$UriList(params: CreatePropertyReferenceFavouritesmodelPut$UriList$Params, context?: HttpContext): Observable<EntityModelMotorcycleModel> {
    return this.createPropertyReferenceFavouritesmodelPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleModel>): EntityModelMotorcycleModel => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceFavouritesmodelDelete()` */
  static readonly DeletePropertyReferenceFavouritesmodelDeletePath = '/favouritesModels/{id}/motorcycle';

  /**
   * delete-motorcyclemodel-by-favouritesmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceFavouritesmodelDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceFavouritesmodelDelete$Response(params: DeletePropertyReferenceFavouritesmodelDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceFavouritesmodelDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-motorcyclemodel-by-favouritesmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceFavouritesmodelDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceFavouritesmodelDelete(params: DeletePropertyReferenceFavouritesmodelDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceFavouritesmodelDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceFavouritesmodelPatch()` */
  static readonly CreatePropertyReferenceFavouritesmodelPatchPath = '/favouritesModels/{id}/motorcycle';

  /**
   * patch-motorcyclemodel-by-favouritesmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFavouritesmodelPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFavouritesmodelPatch$Json$Response(params: CreatePropertyReferenceFavouritesmodelPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
    return createPropertyReferenceFavouritesmodelPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-motorcyclemodel-by-favouritesmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFavouritesmodelPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFavouritesmodelPatch$Json(params: CreatePropertyReferenceFavouritesmodelPatch$Json$Params, context?: HttpContext): Observable<EntityModelMotorcycleModel> {
    return this.createPropertyReferenceFavouritesmodelPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleModel>): EntityModelMotorcycleModel => r.body)
    );
  }

  /**
   * patch-motorcyclemodel-by-favouritesmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFavouritesmodelPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFavouritesmodelPatch$UriList$Response(params: CreatePropertyReferenceFavouritesmodelPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
    return createPropertyReferenceFavouritesmodelPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-motorcyclemodel-by-favouritesmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFavouritesmodelPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFavouritesmodelPatch$UriList(params: CreatePropertyReferenceFavouritesmodelPatch$UriList$Params, context?: HttpContext): Observable<EntityModelMotorcycleModel> {
    return this.createPropertyReferenceFavouritesmodelPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleModel>): EntityModelMotorcycleModel => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceFavouritesmodelGet()` */
  static readonly FollowPropertyReferenceFavouritesmodelGetPath = '/favouritesModels/{id}/motorcycle/{propertyId}';

  /**
   * get-motorcyclemodel-by-favouritesmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceFavouritesmodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritesmodelGet$Response(params: FollowPropertyReferenceFavouritesmodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
    return followPropertyReferenceFavouritesmodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-motorcyclemodel-by-favouritesmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceFavouritesmodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritesmodelGet(params: FollowPropertyReferenceFavouritesmodelGet$Params, context?: HttpContext): Observable<EntityModelMotorcycleModel> {
    return this.followPropertyReferenceFavouritesmodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleModel>): EntityModelMotorcycleModel => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdFavouritesmodelDelete()` */
  static readonly DeletePropertyReferenceIdFavouritesmodelDeletePath = '/favouritesModels/{id}/motorcycle/{propertyId}';

  /**
   * delete-motorcyclemodel-by-favouritesmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdFavouritesmodelDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdFavouritesmodelDelete$Response(params: DeletePropertyReferenceIdFavouritesmodelDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdFavouritesmodelDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-motorcyclemodel-by-favouritesmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdFavouritesmodelDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdFavouritesmodelDelete(params: DeletePropertyReferenceIdFavouritesmodelDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdFavouritesmodelDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceFavouritesmodelGet21()` */
  static readonly FollowPropertyReferenceFavouritesmodelGet21Path = '/favouritesModels/{id}/user';

  /**
   * get-usermodel-by-favouritesmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceFavouritesmodelGet21$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritesmodelGet21$Json$Response(params: FollowPropertyReferenceFavouritesmodelGet21$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUserModel>> {
    return followPropertyReferenceFavouritesmodelGet21$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-usermodel-by-favouritesmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceFavouritesmodelGet21$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritesmodelGet21$Json(params: FollowPropertyReferenceFavouritesmodelGet21$Json$Params, context?: HttpContext): Observable<EntityModelUserModel> {
    return this.followPropertyReferenceFavouritesmodelGet21$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUserModel>): EntityModelUserModel => r.body)
    );
  }

  /**
   * get-usermodel-by-favouritesmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceFavouritesmodelGet21$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritesmodelGet21$UriList$Response(params: FollowPropertyReferenceFavouritesmodelGet21$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceFavouritesmodelGet21$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-usermodel-by-favouritesmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceFavouritesmodelGet21$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritesmodelGet21$UriList(params: FollowPropertyReferenceFavouritesmodelGet21$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceFavouritesmodelGet21$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceFavouritesmodelPut1()` */
  static readonly CreatePropertyReferenceFavouritesmodelPut1Path = '/favouritesModels/{id}/user';

  /**
   * update-usermodel-by-favouritesmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFavouritesmodelPut1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFavouritesmodelPut1$Json$Response(params: CreatePropertyReferenceFavouritesmodelPut1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUserModel>> {
    return createPropertyReferenceFavouritesmodelPut1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-usermodel-by-favouritesmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFavouritesmodelPut1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFavouritesmodelPut1$Json(params: CreatePropertyReferenceFavouritesmodelPut1$Json$Params, context?: HttpContext): Observable<EntityModelUserModel> {
    return this.createPropertyReferenceFavouritesmodelPut1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUserModel>): EntityModelUserModel => r.body)
    );
  }

  /**
   * update-usermodel-by-favouritesmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFavouritesmodelPut1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFavouritesmodelPut1$UriList$Response(params: CreatePropertyReferenceFavouritesmodelPut1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUserModel>> {
    return createPropertyReferenceFavouritesmodelPut1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-usermodel-by-favouritesmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFavouritesmodelPut1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFavouritesmodelPut1$UriList(params: CreatePropertyReferenceFavouritesmodelPut1$UriList$Params, context?: HttpContext): Observable<EntityModelUserModel> {
    return this.createPropertyReferenceFavouritesmodelPut1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUserModel>): EntityModelUserModel => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceFavouritesmodelDelete1()` */
  static readonly DeletePropertyReferenceFavouritesmodelDelete1Path = '/favouritesModels/{id}/user';

  /**
   * delete-usermodel-by-favouritesmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceFavouritesmodelDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceFavouritesmodelDelete1$Response(params: DeletePropertyReferenceFavouritesmodelDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceFavouritesmodelDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-usermodel-by-favouritesmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceFavouritesmodelDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceFavouritesmodelDelete1(params: DeletePropertyReferenceFavouritesmodelDelete1$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceFavouritesmodelDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceFavouritesmodelPatch1()` */
  static readonly CreatePropertyReferenceFavouritesmodelPatch1Path = '/favouritesModels/{id}/user';

  /**
   * patch-usermodel-by-favouritesmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFavouritesmodelPatch1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFavouritesmodelPatch1$Json$Response(params: CreatePropertyReferenceFavouritesmodelPatch1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUserModel>> {
    return createPropertyReferenceFavouritesmodelPatch1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-usermodel-by-favouritesmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFavouritesmodelPatch1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFavouritesmodelPatch1$Json(params: CreatePropertyReferenceFavouritesmodelPatch1$Json$Params, context?: HttpContext): Observable<EntityModelUserModel> {
    return this.createPropertyReferenceFavouritesmodelPatch1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUserModel>): EntityModelUserModel => r.body)
    );
  }

  /**
   * patch-usermodel-by-favouritesmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFavouritesmodelPatch1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFavouritesmodelPatch1$UriList$Response(params: CreatePropertyReferenceFavouritesmodelPatch1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUserModel>> {
    return createPropertyReferenceFavouritesmodelPatch1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-usermodel-by-favouritesmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFavouritesmodelPatch1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFavouritesmodelPatch1$UriList(params: CreatePropertyReferenceFavouritesmodelPatch1$UriList$Params, context?: HttpContext): Observable<EntityModelUserModel> {
    return this.createPropertyReferenceFavouritesmodelPatch1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUserModel>): EntityModelUserModel => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceFavouritesmodelGet2()` */
  static readonly FollowPropertyReferenceFavouritesmodelGet2Path = '/favouritesModels/{id}/user/{propertyId}';

  /**
   * get-usermodel-by-favouritesmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceFavouritesmodelGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritesmodelGet2$Response(params: FollowPropertyReferenceFavouritesmodelGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUserModel>> {
    return followPropertyReferenceFavouritesmodelGet2(this.http, this.rootUrl, params, context);
  }

  /**
   * get-usermodel-by-favouritesmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceFavouritesmodelGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritesmodelGet2(params: FollowPropertyReferenceFavouritesmodelGet2$Params, context?: HttpContext): Observable<EntityModelUserModel> {
    return this.followPropertyReferenceFavouritesmodelGet2$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUserModel>): EntityModelUserModel => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdFavouritesmodelDelete1()` */
  static readonly DeletePropertyReferenceIdFavouritesmodelDelete1Path = '/favouritesModels/{id}/user/{propertyId}';

  /**
   * delete-usermodel-by-favouritesmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdFavouritesmodelDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdFavouritesmodelDelete1$Response(params: DeletePropertyReferenceIdFavouritesmodelDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdFavouritesmodelDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-usermodel-by-favouritesmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdFavouritesmodelDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdFavouritesmodelDelete1(params: DeletePropertyReferenceIdFavouritesmodelDelete1$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdFavouritesmodelDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
