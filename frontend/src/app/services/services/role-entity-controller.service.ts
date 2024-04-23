/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceRoleDelete } from '../fn/role-entity-controller/delete-item-resource-role-delete';
import { DeleteItemResourceRoleDelete$Params } from '../fn/role-entity-controller/delete-item-resource-role-delete';
import { EntityModelRole } from '../models/entity-model-role';
import { getCollectionResourceRoleGet1$Json } from '../fn/role-entity-controller/get-collection-resource-role-get-1-json';
import { GetCollectionResourceRoleGet1$Json$Params } from '../fn/role-entity-controller/get-collection-resource-role-get-1-json';
import { getCollectionResourceRoleGet1$UriList } from '../fn/role-entity-controller/get-collection-resource-role-get-1-uri-list';
import { GetCollectionResourceRoleGet1$UriList$Params } from '../fn/role-entity-controller/get-collection-resource-role-get-1-uri-list';
import { getItemResourceRoleGet } from '../fn/role-entity-controller/get-item-resource-role-get';
import { GetItemResourceRoleGet$Params } from '../fn/role-entity-controller/get-item-resource-role-get';
import { PagedModelEntityModelRole } from '../models/paged-model-entity-model-role';
import { patchItemResourceRolePatch } from '../fn/role-entity-controller/patch-item-resource-role-patch';
import { PatchItemResourceRolePatch$Params } from '../fn/role-entity-controller/patch-item-resource-role-patch';
import { postCollectionResourceRolePost } from '../fn/role-entity-controller/post-collection-resource-role-post';
import { PostCollectionResourceRolePost$Params } from '../fn/role-entity-controller/post-collection-resource-role-post';
import { putItemResourceRolePut } from '../fn/role-entity-controller/put-item-resource-role-put';
import { PutItemResourceRolePut$Params } from '../fn/role-entity-controller/put-item-resource-role-put';

@Injectable({ providedIn: 'root' })
export class RoleEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceRoleGet1()` */
  static readonly GetCollectionResourceRoleGet1Path = '/roles';

  /**
   * get-role
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceRoleGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceRoleGet1$Json$Response(params?: GetCollectionResourceRoleGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelRole>> {
    return getCollectionResourceRoleGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-role
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceRoleGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceRoleGet1$Json(params?: GetCollectionResourceRoleGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelRole> {
    return this.getCollectionResourceRoleGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelRole>): PagedModelEntityModelRole => r.body)
    );
  }

  /**
   * get-role
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceRoleGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceRoleGet1$UriList$Response(params?: GetCollectionResourceRoleGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceRoleGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-role
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceRoleGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceRoleGet1$UriList(params?: GetCollectionResourceRoleGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceRoleGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceRolePost()` */
  static readonly PostCollectionResourceRolePostPath = '/roles';

  /**
   * create-role
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceRolePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceRolePost$Response(params: PostCollectionResourceRolePost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRole>> {
    return postCollectionResourceRolePost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-role
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceRolePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceRolePost(params: PostCollectionResourceRolePost$Params, context?: HttpContext): Observable<EntityModelRole> {
    return this.postCollectionResourceRolePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRole>): EntityModelRole => r.body)
    );
  }

  /** Path part for operation `getItemResourceRoleGet()` */
  static readonly GetItemResourceRoleGetPath = '/roles/{id}';

  /**
   * get-role
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceRoleGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceRoleGet$Response(params: GetItemResourceRoleGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRole>> {
    return getItemResourceRoleGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-role
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceRoleGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceRoleGet(params: GetItemResourceRoleGet$Params, context?: HttpContext): Observable<EntityModelRole> {
    return this.getItemResourceRoleGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRole>): EntityModelRole => r.body)
    );
  }

  /** Path part for operation `putItemResourceRolePut()` */
  static readonly PutItemResourceRolePutPath = '/roles/{id}';

  /**
   * update-role
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceRolePut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceRolePut$Response(params: PutItemResourceRolePut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRole>> {
    return putItemResourceRolePut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-role
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceRolePut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceRolePut(params: PutItemResourceRolePut$Params, context?: HttpContext): Observable<EntityModelRole> {
    return this.putItemResourceRolePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRole>): EntityModelRole => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceRoleDelete()` */
  static readonly DeleteItemResourceRoleDeletePath = '/roles/{id}';

  /**
   * delete-role
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceRoleDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceRoleDelete$Response(params: DeleteItemResourceRoleDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceRoleDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-role
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceRoleDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceRoleDelete(params: DeleteItemResourceRoleDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceRoleDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceRolePatch()` */
  static readonly PatchItemResourceRolePatchPath = '/roles/{id}';

  /**
   * patch-role
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceRolePatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceRolePatch$Response(params: PatchItemResourceRolePatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRole>> {
    return patchItemResourceRolePatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-role
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceRolePatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceRolePatch(params: PatchItemResourceRolePatch$Params, context?: HttpContext): Observable<EntityModelRole> {
    return this.patchItemResourceRolePatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRole>): EntityModelRole => r.body)
    );
  }

}
