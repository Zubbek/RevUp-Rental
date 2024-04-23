/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceUsermodelDelete } from '../fn/user-model-entity-controller/delete-item-resource-usermodel-delete';
import { DeleteItemResourceUsermodelDelete$Params } from '../fn/user-model-entity-controller/delete-item-resource-usermodel-delete';
import { EntityModelUserModel } from '../models/entity-model-user-model';
import { getCollectionResourceUsermodelGet1$Json } from '../fn/user-model-entity-controller/get-collection-resource-usermodel-get-1-json';
import { GetCollectionResourceUsermodelGet1$Json$Params } from '../fn/user-model-entity-controller/get-collection-resource-usermodel-get-1-json';
import { getCollectionResourceUsermodelGet1$UriList } from '../fn/user-model-entity-controller/get-collection-resource-usermodel-get-1-uri-list';
import { GetCollectionResourceUsermodelGet1$UriList$Params } from '../fn/user-model-entity-controller/get-collection-resource-usermodel-get-1-uri-list';
import { getItemResourceUsermodelGet } from '../fn/user-model-entity-controller/get-item-resource-usermodel-get';
import { GetItemResourceUsermodelGet$Params } from '../fn/user-model-entity-controller/get-item-resource-usermodel-get';
import { PagedModelEntityModelUserModel } from '../models/paged-model-entity-model-user-model';
import { patchItemResourceUsermodelPatch } from '../fn/user-model-entity-controller/patch-item-resource-usermodel-patch';
import { PatchItemResourceUsermodelPatch$Params } from '../fn/user-model-entity-controller/patch-item-resource-usermodel-patch';
import { postCollectionResourceUsermodelPost } from '../fn/user-model-entity-controller/post-collection-resource-usermodel-post';
import { PostCollectionResourceUsermodelPost$Params } from '../fn/user-model-entity-controller/post-collection-resource-usermodel-post';
import { putItemResourceUsermodelPut } from '../fn/user-model-entity-controller/put-item-resource-usermodel-put';
import { PutItemResourceUsermodelPut$Params } from '../fn/user-model-entity-controller/put-item-resource-usermodel-put';

@Injectable({ providedIn: 'root' })
export class UserModelEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceUsermodelGet1()` */
  static readonly GetCollectionResourceUsermodelGet1Path = '/userModels';

  /**
   * get-usermodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceUsermodelGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceUsermodelGet1$Json$Response(params?: GetCollectionResourceUsermodelGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelUserModel>> {
    return getCollectionResourceUsermodelGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-usermodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceUsermodelGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceUsermodelGet1$Json(params?: GetCollectionResourceUsermodelGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelUserModel> {
    return this.getCollectionResourceUsermodelGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelUserModel>): PagedModelEntityModelUserModel => r.body)
    );
  }

  /**
   * get-usermodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceUsermodelGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceUsermodelGet1$UriList$Response(params?: GetCollectionResourceUsermodelGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceUsermodelGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-usermodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceUsermodelGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceUsermodelGet1$UriList(params?: GetCollectionResourceUsermodelGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceUsermodelGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceUsermodelPost()` */
  static readonly PostCollectionResourceUsermodelPostPath = '/userModels';

  /**
   * create-usermodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceUsermodelPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceUsermodelPost$Response(params: PostCollectionResourceUsermodelPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUserModel>> {
    return postCollectionResourceUsermodelPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-usermodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceUsermodelPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceUsermodelPost(params: PostCollectionResourceUsermodelPost$Params, context?: HttpContext): Observable<EntityModelUserModel> {
    return this.postCollectionResourceUsermodelPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUserModel>): EntityModelUserModel => r.body)
    );
  }

  /** Path part for operation `getItemResourceUsermodelGet()` */
  static readonly GetItemResourceUsermodelGetPath = '/userModels/{id}';

  /**
   * get-usermodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceUsermodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceUsermodelGet$Response(params: GetItemResourceUsermodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUserModel>> {
    return getItemResourceUsermodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-usermodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceUsermodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceUsermodelGet(params: GetItemResourceUsermodelGet$Params, context?: HttpContext): Observable<EntityModelUserModel> {
    return this.getItemResourceUsermodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUserModel>): EntityModelUserModel => r.body)
    );
  }

  /** Path part for operation `putItemResourceUsermodelPut()` */
  static readonly PutItemResourceUsermodelPutPath = '/userModels/{id}';

  /**
   * update-usermodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceUsermodelPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceUsermodelPut$Response(params: PutItemResourceUsermodelPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUserModel>> {
    return putItemResourceUsermodelPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-usermodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceUsermodelPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceUsermodelPut(params: PutItemResourceUsermodelPut$Params, context?: HttpContext): Observable<EntityModelUserModel> {
    return this.putItemResourceUsermodelPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUserModel>): EntityModelUserModel => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceUsermodelDelete()` */
  static readonly DeleteItemResourceUsermodelDeletePath = '/userModels/{id}';

  /**
   * delete-usermodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceUsermodelDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceUsermodelDelete$Response(params: DeleteItemResourceUsermodelDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceUsermodelDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-usermodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceUsermodelDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceUsermodelDelete(params: DeleteItemResourceUsermodelDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceUsermodelDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceUsermodelPatch()` */
  static readonly PatchItemResourceUsermodelPatchPath = '/userModels/{id}';

  /**
   * patch-usermodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceUsermodelPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceUsermodelPatch$Response(params: PatchItemResourceUsermodelPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUserModel>> {
    return patchItemResourceUsermodelPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-usermodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceUsermodelPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceUsermodelPatch(params: PatchItemResourceUsermodelPatch$Params, context?: HttpContext): Observable<EntityModelUserModel> {
    return this.patchItemResourceUsermodelPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUserModel>): EntityModelUserModel => r.body)
    );
  }

}
