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
import { createPropertyReferenceMotorcyclemodelPatch$Json } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-patch-json';
import { CreatePropertyReferenceMotorcyclemodelPatch$Json$Params } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-patch-json';
import { createPropertyReferenceMotorcyclemodelPatch$UriList } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-patch-uri-list';
import { CreatePropertyReferenceMotorcyclemodelPatch$UriList$Params } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-patch-uri-list';
import { createPropertyReferenceMotorcyclemodelPut$Json } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-put-json';
import { CreatePropertyReferenceMotorcyclemodelPut$Json$Params } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-put-json';
import { createPropertyReferenceMotorcyclemodelPut$UriList } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-put-uri-list';
import { CreatePropertyReferenceMotorcyclemodelPut$UriList$Params } from '../fn/motorcycle-model-property-reference-controller/create-property-reference-motorcyclemodel-put-uri-list';
import { deletePropertyReferenceIdMotorcyclemodelDelete } from '../fn/motorcycle-model-property-reference-controller/delete-property-reference-id-motorcyclemodel-delete';
import { DeletePropertyReferenceIdMotorcyclemodelDelete$Params } from '../fn/motorcycle-model-property-reference-controller/delete-property-reference-id-motorcyclemodel-delete';
import { deletePropertyReferenceMotorcyclemodelDelete } from '../fn/motorcycle-model-property-reference-controller/delete-property-reference-motorcyclemodel-delete';
import { DeletePropertyReferenceMotorcyclemodelDelete$Params } from '../fn/motorcycle-model-property-reference-controller/delete-property-reference-motorcyclemodel-delete';
import { followPropertyReferenceMotorcyclemodelGet } from '../fn/motorcycle-model-property-reference-controller/follow-property-reference-motorcyclemodel-get';
import { FollowPropertyReferenceMotorcyclemodelGet$Params } from '../fn/motorcycle-model-property-reference-controller/follow-property-reference-motorcyclemodel-get';
import { followPropertyReferenceMotorcyclemodelGet1$Json } from '../fn/motorcycle-model-property-reference-controller/follow-property-reference-motorcyclemodel-get-1-json';
import { FollowPropertyReferenceMotorcyclemodelGet1$Json$Params } from '../fn/motorcycle-model-property-reference-controller/follow-property-reference-motorcyclemodel-get-1-json';
import { followPropertyReferenceMotorcyclemodelGet1$UriList } from '../fn/motorcycle-model-property-reference-controller/follow-property-reference-motorcyclemodel-get-1-uri-list';
import { FollowPropertyReferenceMotorcyclemodelGet1$UriList$Params } from '../fn/motorcycle-model-property-reference-controller/follow-property-reference-motorcyclemodel-get-1-uri-list';

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

}
