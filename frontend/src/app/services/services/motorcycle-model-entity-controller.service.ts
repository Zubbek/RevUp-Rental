/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceMotorcyclemodelDelete } from '../fn/motorcycle-model-entity-controller/delete-item-resource-motorcyclemodel-delete';
import { DeleteItemResourceMotorcyclemodelDelete$Params } from '../fn/motorcycle-model-entity-controller/delete-item-resource-motorcyclemodel-delete';
import { EntityModelMotorcycleModel } from '../models/entity-model-motorcycle-model';
import { getCollectionResourceMotorcyclemodelGet1$Json } from '../fn/motorcycle-model-entity-controller/get-collection-resource-motorcyclemodel-get-1-json';
import { GetCollectionResourceMotorcyclemodelGet1$Json$Params } from '../fn/motorcycle-model-entity-controller/get-collection-resource-motorcyclemodel-get-1-json';
import { getCollectionResourceMotorcyclemodelGet1$UriList } from '../fn/motorcycle-model-entity-controller/get-collection-resource-motorcyclemodel-get-1-uri-list';
import { GetCollectionResourceMotorcyclemodelGet1$UriList$Params } from '../fn/motorcycle-model-entity-controller/get-collection-resource-motorcyclemodel-get-1-uri-list';
import { getItemResourceMotorcyclemodelGet } from '../fn/motorcycle-model-entity-controller/get-item-resource-motorcyclemodel-get';
import { GetItemResourceMotorcyclemodelGet$Params } from '../fn/motorcycle-model-entity-controller/get-item-resource-motorcyclemodel-get';
import { PagedModelEntityModelMotorcycleModel } from '../models/paged-model-entity-model-motorcycle-model';
import { patchItemResourceMotorcyclemodelPatch } from '../fn/motorcycle-model-entity-controller/patch-item-resource-motorcyclemodel-patch';
import { PatchItemResourceMotorcyclemodelPatch$Params } from '../fn/motorcycle-model-entity-controller/patch-item-resource-motorcyclemodel-patch';
import { postCollectionResourceMotorcyclemodelPost } from '../fn/motorcycle-model-entity-controller/post-collection-resource-motorcyclemodel-post';
import { PostCollectionResourceMotorcyclemodelPost$Params } from '../fn/motorcycle-model-entity-controller/post-collection-resource-motorcyclemodel-post';
import { putItemResourceMotorcyclemodelPut } from '../fn/motorcycle-model-entity-controller/put-item-resource-motorcyclemodel-put';
import { PutItemResourceMotorcyclemodelPut$Params } from '../fn/motorcycle-model-entity-controller/put-item-resource-motorcyclemodel-put';

@Injectable({ providedIn: 'root' })
export class MotorcycleModelEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceMotorcyclemodelGet1()` */
  static readonly GetCollectionResourceMotorcyclemodelGet1Path = '/motorcycleModels';

  /**
   * get-motorcyclemodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceMotorcyclemodelGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceMotorcyclemodelGet1$Json$Response(params?: GetCollectionResourceMotorcyclemodelGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelMotorcycleModel>> {
    return getCollectionResourceMotorcyclemodelGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-motorcyclemodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceMotorcyclemodelGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceMotorcyclemodelGet1$Json(params?: GetCollectionResourceMotorcyclemodelGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelMotorcycleModel> {
    return this.getCollectionResourceMotorcyclemodelGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelMotorcycleModel>): PagedModelEntityModelMotorcycleModel => r.body)
    );
  }

  /**
   * get-motorcyclemodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceMotorcyclemodelGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceMotorcyclemodelGet1$UriList$Response(params?: GetCollectionResourceMotorcyclemodelGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceMotorcyclemodelGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-motorcyclemodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceMotorcyclemodelGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceMotorcyclemodelGet1$UriList(params?: GetCollectionResourceMotorcyclemodelGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceMotorcyclemodelGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceMotorcyclemodelPost()` */
  static readonly PostCollectionResourceMotorcyclemodelPostPath = '/motorcycleModels';

  /**
   * create-motorcyclemodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceMotorcyclemodelPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceMotorcyclemodelPost$Response(params: PostCollectionResourceMotorcyclemodelPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
    return postCollectionResourceMotorcyclemodelPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-motorcyclemodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceMotorcyclemodelPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceMotorcyclemodelPost(params: PostCollectionResourceMotorcyclemodelPost$Params, context?: HttpContext): Observable<EntityModelMotorcycleModel> {
    return this.postCollectionResourceMotorcyclemodelPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleModel>): EntityModelMotorcycleModel => r.body)
    );
  }

  /** Path part for operation `getItemResourceMotorcyclemodelGet()` */
  static readonly GetItemResourceMotorcyclemodelGetPath = '/motorcycleModels/{id}';

  /**
   * get-motorcyclemodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceMotorcyclemodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceMotorcyclemodelGet$Response(params: GetItemResourceMotorcyclemodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
    return getItemResourceMotorcyclemodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-motorcyclemodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceMotorcyclemodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceMotorcyclemodelGet(params: GetItemResourceMotorcyclemodelGet$Params, context?: HttpContext): Observable<EntityModelMotorcycleModel> {
    return this.getItemResourceMotorcyclemodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleModel>): EntityModelMotorcycleModel => r.body)
    );
  }

  /** Path part for operation `putItemResourceMotorcyclemodelPut()` */
  static readonly PutItemResourceMotorcyclemodelPutPath = '/motorcycleModels/{id}';

  /**
   * update-motorcyclemodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceMotorcyclemodelPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceMotorcyclemodelPut$Response(params: PutItemResourceMotorcyclemodelPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
    return putItemResourceMotorcyclemodelPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-motorcyclemodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceMotorcyclemodelPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceMotorcyclemodelPut(params: PutItemResourceMotorcyclemodelPut$Params, context?: HttpContext): Observable<EntityModelMotorcycleModel> {
    return this.putItemResourceMotorcyclemodelPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleModel>): EntityModelMotorcycleModel => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceMotorcyclemodelDelete()` */
  static readonly DeleteItemResourceMotorcyclemodelDeletePath = '/motorcycleModels/{id}';

  /**
   * delete-motorcyclemodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceMotorcyclemodelDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceMotorcyclemodelDelete$Response(params: DeleteItemResourceMotorcyclemodelDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceMotorcyclemodelDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-motorcyclemodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceMotorcyclemodelDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceMotorcyclemodelDelete(params: DeleteItemResourceMotorcyclemodelDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceMotorcyclemodelDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceMotorcyclemodelPatch()` */
  static readonly PatchItemResourceMotorcyclemodelPatchPath = '/motorcycleModels/{id}';

  /**
   * patch-motorcyclemodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceMotorcyclemodelPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceMotorcyclemodelPatch$Response(params: PatchItemResourceMotorcyclemodelPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleModel>> {
    return patchItemResourceMotorcyclemodelPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-motorcyclemodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceMotorcyclemodelPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceMotorcyclemodelPatch(params: PatchItemResourceMotorcyclemodelPatch$Params, context?: HttpContext): Observable<EntityModelMotorcycleModel> {
    return this.patchItemResourceMotorcyclemodelPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleModel>): EntityModelMotorcycleModel => r.body)
    );
  }

}
