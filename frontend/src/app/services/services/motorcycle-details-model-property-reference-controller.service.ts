/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPropertyReferenceMotorcycledetailsmodelPatch$Json } from '../fn/motorcycle-details-model-property-reference-controller/create-property-reference-motorcycledetailsmodel-patch-json';
import { CreatePropertyReferenceMotorcycledetailsmodelPatch$Json$Params } from '../fn/motorcycle-details-model-property-reference-controller/create-property-reference-motorcycledetailsmodel-patch-json';
import { createPropertyReferenceMotorcycledetailsmodelPatch$UriList } from '../fn/motorcycle-details-model-property-reference-controller/create-property-reference-motorcycledetailsmodel-patch-uri-list';
import { CreatePropertyReferenceMotorcycledetailsmodelPatch$UriList$Params } from '../fn/motorcycle-details-model-property-reference-controller/create-property-reference-motorcycledetailsmodel-patch-uri-list';
import { createPropertyReferenceMotorcycledetailsmodelPut$Json } from '../fn/motorcycle-details-model-property-reference-controller/create-property-reference-motorcycledetailsmodel-put-json';
import { CreatePropertyReferenceMotorcycledetailsmodelPut$Json$Params } from '../fn/motorcycle-details-model-property-reference-controller/create-property-reference-motorcycledetailsmodel-put-json';
import { createPropertyReferenceMotorcycledetailsmodelPut$UriList } from '../fn/motorcycle-details-model-property-reference-controller/create-property-reference-motorcycledetailsmodel-put-uri-list';
import { CreatePropertyReferenceMotorcycledetailsmodelPut$UriList$Params } from '../fn/motorcycle-details-model-property-reference-controller/create-property-reference-motorcycledetailsmodel-put-uri-list';
import { deletePropertyReferenceIdMotorcycledetailsmodelDelete } from '../fn/motorcycle-details-model-property-reference-controller/delete-property-reference-id-motorcycledetailsmodel-delete';
import { DeletePropertyReferenceIdMotorcycledetailsmodelDelete$Params } from '../fn/motorcycle-details-model-property-reference-controller/delete-property-reference-id-motorcycledetailsmodel-delete';
import { deletePropertyReferenceMotorcycledetailsmodelDelete } from '../fn/motorcycle-details-model-property-reference-controller/delete-property-reference-motorcycledetailsmodel-delete';
import { DeletePropertyReferenceMotorcycledetailsmodelDelete$Params } from '../fn/motorcycle-details-model-property-reference-controller/delete-property-reference-motorcycledetailsmodel-delete';
import { EntityModelMotorcycleModel } from '../models/entity-model-motorcycle-model';
import { followPropertyReferenceMotorcycledetailsmodelGet } from '../fn/motorcycle-details-model-property-reference-controller/follow-property-reference-motorcycledetailsmodel-get';
import { FollowPropertyReferenceMotorcycledetailsmodelGet$Params } from '../fn/motorcycle-details-model-property-reference-controller/follow-property-reference-motorcycledetailsmodel-get';
import { followPropertyReferenceMotorcycledetailsmodelGet1$Json } from '../fn/motorcycle-details-model-property-reference-controller/follow-property-reference-motorcycledetailsmodel-get-1-json';
import { FollowPropertyReferenceMotorcycledetailsmodelGet1$Json$Params } from '../fn/motorcycle-details-model-property-reference-controller/follow-property-reference-motorcycledetailsmodel-get-1-json';
import { followPropertyReferenceMotorcycledetailsmodelGet1$UriList } from '../fn/motorcycle-details-model-property-reference-controller/follow-property-reference-motorcycledetailsmodel-get-1-uri-list';
import { FollowPropertyReferenceMotorcycledetailsmodelGet1$UriList$Params } from '../fn/motorcycle-details-model-property-reference-controller/follow-property-reference-motorcycledetailsmodel-get-1-uri-list';

@Injectable({ providedIn: 'root' })
export class MotorcycleDetailsModelPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceMotorcycledetailsmodelGet1()` */
  static readonly FollowPropertyReferenceMotorcycledetailsmodelGet1Path = '/motorcycleDetailsModels/{id}/motorcycle';

  /**
   * get-motorcyclemodel-by-motorcycledetailsmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceMotorcycledetailsmodelGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMotorcycledetailsmodelGet1$Json$Response(params: FollowPropertyReferenceMotorcycledetailsmodelGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
    return followPropertyReferenceMotorcycledetailsmodelGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-motorcyclemodel-by-motorcycledetailsmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceMotorcycledetailsmodelGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMotorcycledetailsmodelGet1$Json(params: FollowPropertyReferenceMotorcycledetailsmodelGet1$Json$Params, context?: HttpContext): Observable<EntityModelMotorcycleModel> {
    return this.followPropertyReferenceMotorcycledetailsmodelGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleModel>): EntityModelMotorcycleModel => r.body)
    );
  }

  /**
   * get-motorcyclemodel-by-motorcycledetailsmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceMotorcycledetailsmodelGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMotorcycledetailsmodelGet1$UriList$Response(params: FollowPropertyReferenceMotorcycledetailsmodelGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceMotorcycledetailsmodelGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-motorcyclemodel-by-motorcycledetailsmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceMotorcycledetailsmodelGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMotorcycledetailsmodelGet1$UriList(params: FollowPropertyReferenceMotorcycledetailsmodelGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceMotorcycledetailsmodelGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceMotorcycledetailsmodelPut()` */
  static readonly CreatePropertyReferenceMotorcycledetailsmodelPutPath = '/motorcycleDetailsModels/{id}/motorcycle';

  /**
   * update-motorcyclemodel-by-motorcycledetailsmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMotorcycledetailsmodelPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMotorcycledetailsmodelPut$Json$Response(params: CreatePropertyReferenceMotorcycledetailsmodelPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
    return createPropertyReferenceMotorcycledetailsmodelPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-motorcyclemodel-by-motorcycledetailsmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMotorcycledetailsmodelPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMotorcycledetailsmodelPut$Json(params: CreatePropertyReferenceMotorcycledetailsmodelPut$Json$Params, context?: HttpContext): Observable<EntityModelMotorcycleModel> {
    return this.createPropertyReferenceMotorcycledetailsmodelPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleModel>): EntityModelMotorcycleModel => r.body)
    );
  }

  /**
   * update-motorcyclemodel-by-motorcycledetailsmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMotorcycledetailsmodelPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMotorcycledetailsmodelPut$UriList$Response(params: CreatePropertyReferenceMotorcycledetailsmodelPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
    return createPropertyReferenceMotorcycledetailsmodelPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-motorcyclemodel-by-motorcycledetailsmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMotorcycledetailsmodelPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMotorcycledetailsmodelPut$UriList(params: CreatePropertyReferenceMotorcycledetailsmodelPut$UriList$Params, context?: HttpContext): Observable<EntityModelMotorcycleModel> {
    return this.createPropertyReferenceMotorcycledetailsmodelPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleModel>): EntityModelMotorcycleModel => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceMotorcycledetailsmodelDelete()` */
  static readonly DeletePropertyReferenceMotorcycledetailsmodelDeletePath = '/motorcycleDetailsModels/{id}/motorcycle';

  /**
   * delete-motorcyclemodel-by-motorcycledetailsmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceMotorcycledetailsmodelDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceMotorcycledetailsmodelDelete$Response(params: DeletePropertyReferenceMotorcycledetailsmodelDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceMotorcycledetailsmodelDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-motorcyclemodel-by-motorcycledetailsmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceMotorcycledetailsmodelDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceMotorcycledetailsmodelDelete(params: DeletePropertyReferenceMotorcycledetailsmodelDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceMotorcycledetailsmodelDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceMotorcycledetailsmodelPatch()` */
  static readonly CreatePropertyReferenceMotorcycledetailsmodelPatchPath = '/motorcycleDetailsModels/{id}/motorcycle';

  /**
   * patch-motorcyclemodel-by-motorcycledetailsmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMotorcycledetailsmodelPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMotorcycledetailsmodelPatch$Json$Response(params: CreatePropertyReferenceMotorcycledetailsmodelPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
    return createPropertyReferenceMotorcycledetailsmodelPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-motorcyclemodel-by-motorcycledetailsmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMotorcycledetailsmodelPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMotorcycledetailsmodelPatch$Json(params: CreatePropertyReferenceMotorcycledetailsmodelPatch$Json$Params, context?: HttpContext): Observable<EntityModelMotorcycleModel> {
    return this.createPropertyReferenceMotorcycledetailsmodelPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleModel>): EntityModelMotorcycleModel => r.body)
    );
  }

  /**
   * patch-motorcyclemodel-by-motorcycledetailsmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMotorcycledetailsmodelPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMotorcycledetailsmodelPatch$UriList$Response(params: CreatePropertyReferenceMotorcycledetailsmodelPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
    return createPropertyReferenceMotorcycledetailsmodelPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-motorcyclemodel-by-motorcycledetailsmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMotorcycledetailsmodelPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMotorcycledetailsmodelPatch$UriList(params: CreatePropertyReferenceMotorcycledetailsmodelPatch$UriList$Params, context?: HttpContext): Observable<EntityModelMotorcycleModel> {
    return this.createPropertyReferenceMotorcycledetailsmodelPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleModel>): EntityModelMotorcycleModel => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceMotorcycledetailsmodelGet()` */
  static readonly FollowPropertyReferenceMotorcycledetailsmodelGetPath = '/motorcycleDetailsModels/{id}/motorcycle/{propertyId}';

  /**
   * get-motorcyclemodel-by-motorcycledetailsmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceMotorcycledetailsmodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMotorcycledetailsmodelGet$Response(params: FollowPropertyReferenceMotorcycledetailsmodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
    return followPropertyReferenceMotorcycledetailsmodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-motorcyclemodel-by-motorcycledetailsmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceMotorcycledetailsmodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMotorcycledetailsmodelGet(params: FollowPropertyReferenceMotorcycledetailsmodelGet$Params, context?: HttpContext): Observable<EntityModelMotorcycleModel> {
    return this.followPropertyReferenceMotorcycledetailsmodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleModel>): EntityModelMotorcycleModel => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdMotorcycledetailsmodelDelete()` */
  static readonly DeletePropertyReferenceIdMotorcycledetailsmodelDeletePath = '/motorcycleDetailsModels/{id}/motorcycle/{propertyId}';

  /**
   * delete-motorcyclemodel-by-motorcycledetailsmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdMotorcycledetailsmodelDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdMotorcycledetailsmodelDelete$Response(params: DeletePropertyReferenceIdMotorcycledetailsmodelDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdMotorcycledetailsmodelDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-motorcyclemodel-by-motorcycledetailsmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdMotorcycledetailsmodelDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdMotorcycledetailsmodelDelete(params: DeletePropertyReferenceIdMotorcycledetailsmodelDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdMotorcycledetailsmodelDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
