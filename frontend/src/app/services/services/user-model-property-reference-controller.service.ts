/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollectionModelRole } from '../models/collection-model-role';
import { createPropertyReferenceUsermodelPatch$Json } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-patch-json';
import { CreatePropertyReferenceUsermodelPatch$Json$Params } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-patch-json';
import { createPropertyReferenceUsermodelPatch$UriList } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-patch-uri-list';
import { CreatePropertyReferenceUsermodelPatch$UriList$Params } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-patch-uri-list';
import { createPropertyReferenceUsermodelPut$Json } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-put-json';
import { CreatePropertyReferenceUsermodelPut$Json$Params } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-put-json';
import { createPropertyReferenceUsermodelPut$UriList } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-put-uri-list';
import { CreatePropertyReferenceUsermodelPut$UriList$Params } from '../fn/user-model-property-reference-controller/create-property-reference-usermodel-put-uri-list';
import { deletePropertyReferenceIdUsermodelDelete } from '../fn/user-model-property-reference-controller/delete-property-reference-id-usermodel-delete';
import { DeletePropertyReferenceIdUsermodelDelete$Params } from '../fn/user-model-property-reference-controller/delete-property-reference-id-usermodel-delete';
import { deletePropertyReferenceUsermodelDelete } from '../fn/user-model-property-reference-controller/delete-property-reference-usermodel-delete';
import { DeletePropertyReferenceUsermodelDelete$Params } from '../fn/user-model-property-reference-controller/delete-property-reference-usermodel-delete';
import { followPropertyReferenceUsermodelGet } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get';
import { FollowPropertyReferenceUsermodelGet$Params } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get';
import { followPropertyReferenceUsermodelGet1$Json } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-1-json';
import { FollowPropertyReferenceUsermodelGet1$Json$Params } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-1-json';
import { followPropertyReferenceUsermodelGet1$UriList } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-1-uri-list';
import { FollowPropertyReferenceUsermodelGet1$UriList$Params } from '../fn/user-model-property-reference-controller/follow-property-reference-usermodel-get-1-uri-list';

@Injectable({ providedIn: 'root' })
export class UserModelPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceUsermodelGet1()` */
  static readonly FollowPropertyReferenceUsermodelGet1Path = '/userModels/{id}/roles';

  /**
   * get-role-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUsermodelGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet1$Json$Response(params: FollowPropertyReferenceUsermodelGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return followPropertyReferenceUsermodelGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-role-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUsermodelGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet1$Json(params: FollowPropertyReferenceUsermodelGet1$Json$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.followPropertyReferenceUsermodelGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /**
   * get-role-by-usermodel-Id
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
   * get-role-by-usermodel-Id
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
  static readonly CreatePropertyReferenceUsermodelPutPath = '/userModels/{id}/roles';

  /**
   * update-role-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUsermodelPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUsermodelPut$Json$Response(params: CreatePropertyReferenceUsermodelPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return createPropertyReferenceUsermodelPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-role-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUsermodelPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUsermodelPut$Json(params: CreatePropertyReferenceUsermodelPut$Json$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.createPropertyReferenceUsermodelPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /**
   * update-role-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUsermodelPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUsermodelPut$UriList$Response(params: CreatePropertyReferenceUsermodelPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return createPropertyReferenceUsermodelPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-role-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUsermodelPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUsermodelPut$UriList(params: CreatePropertyReferenceUsermodelPut$UriList$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.createPropertyReferenceUsermodelPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceUsermodelDelete()` */
  static readonly DeletePropertyReferenceUsermodelDeletePath = '/userModels/{id}/roles';

  /**
   * delete-role-by-usermodel-Id
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
   * delete-role-by-usermodel-Id
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
  static readonly CreatePropertyReferenceUsermodelPatchPath = '/userModels/{id}/roles';

  /**
   * patch-role-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUsermodelPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUsermodelPatch$Json$Response(params: CreatePropertyReferenceUsermodelPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return createPropertyReferenceUsermodelPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-role-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUsermodelPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUsermodelPatch$Json(params: CreatePropertyReferenceUsermodelPatch$Json$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.createPropertyReferenceUsermodelPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /**
   * patch-role-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUsermodelPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUsermodelPatch$UriList$Response(params: CreatePropertyReferenceUsermodelPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return createPropertyReferenceUsermodelPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-role-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUsermodelPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUsermodelPatch$UriList(params: CreatePropertyReferenceUsermodelPatch$UriList$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.createPropertyReferenceUsermodelPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUsermodelGet()` */
  static readonly FollowPropertyReferenceUsermodelGetPath = '/userModels/{id}/roles/{propertyId}';

  /**
   * get-role-by-usermodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUsermodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet$Response(params: FollowPropertyReferenceUsermodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return followPropertyReferenceUsermodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-role-by-usermodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUsermodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUsermodelGet(params: FollowPropertyReferenceUsermodelGet$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.followPropertyReferenceUsermodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdUsermodelDelete()` */
  static readonly DeletePropertyReferenceIdUsermodelDeletePath = '/userModels/{id}/roles/{propertyId}';

  /**
   * delete-role-by-usermodel-Id
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
   * delete-role-by-usermodel-Id
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

}
