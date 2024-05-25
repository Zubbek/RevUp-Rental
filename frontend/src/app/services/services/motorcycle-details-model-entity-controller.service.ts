/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceMotorcycledetailsmodelDelete } from '../fn/motorcycle-details-model-entity-controller/delete-item-resource-motorcycledetailsmodel-delete';
import { DeleteItemResourceMotorcycledetailsmodelDelete$Params } from '../fn/motorcycle-details-model-entity-controller/delete-item-resource-motorcycledetailsmodel-delete';
import { EntityModelMotorcycleDetailsModel } from '../models/entity-model-motorcycle-details-model';
import { getCollectionResourceMotorcycledetailsmodelGet1$Json } from '../fn/motorcycle-details-model-entity-controller/get-collection-resource-motorcycledetailsmodel-get-1-json';
import { GetCollectionResourceMotorcycledetailsmodelGet1$Json$Params } from '../fn/motorcycle-details-model-entity-controller/get-collection-resource-motorcycledetailsmodel-get-1-json';
import { getCollectionResourceMotorcycledetailsmodelGet1$UriList } from '../fn/motorcycle-details-model-entity-controller/get-collection-resource-motorcycledetailsmodel-get-1-uri-list';
import { GetCollectionResourceMotorcycledetailsmodelGet1$UriList$Params } from '../fn/motorcycle-details-model-entity-controller/get-collection-resource-motorcycledetailsmodel-get-1-uri-list';
import { getItemResourceMotorcycledetailsmodelGet } from '../fn/motorcycle-details-model-entity-controller/get-item-resource-motorcycledetailsmodel-get';
import { GetItemResourceMotorcycledetailsmodelGet$Params } from '../fn/motorcycle-details-model-entity-controller/get-item-resource-motorcycledetailsmodel-get';
import { PagedModelEntityModelMotorcycleDetailsModel } from '../models/paged-model-entity-model-motorcycle-details-model';
import { patchItemResourceMotorcycledetailsmodelPatch } from '../fn/motorcycle-details-model-entity-controller/patch-item-resource-motorcycledetailsmodel-patch';
import { PatchItemResourceMotorcycledetailsmodelPatch$Params } from '../fn/motorcycle-details-model-entity-controller/patch-item-resource-motorcycledetailsmodel-patch';
import { postCollectionResourceMotorcycledetailsmodelPost } from '../fn/motorcycle-details-model-entity-controller/post-collection-resource-motorcycledetailsmodel-post';
import { PostCollectionResourceMotorcycledetailsmodelPost$Params } from '../fn/motorcycle-details-model-entity-controller/post-collection-resource-motorcycledetailsmodel-post';
import { putItemResourceMotorcycledetailsmodelPut } from '../fn/motorcycle-details-model-entity-controller/put-item-resource-motorcycledetailsmodel-put';
import { PutItemResourceMotorcycledetailsmodelPut$Params } from '../fn/motorcycle-details-model-entity-controller/put-item-resource-motorcycledetailsmodel-put';

@Injectable({ providedIn: 'root' })
export class MotorcycleDetailsModelEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceMotorcycledetailsmodelGet1()` */
  static readonly GetCollectionResourceMotorcycledetailsmodelGet1Path = '/motorcycleDetailsModels';

  /**
   * get-motorcycledetailsmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceMotorcycledetailsmodelGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceMotorcycledetailsmodelGet1$Json$Response(params?: GetCollectionResourceMotorcycledetailsmodelGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelMotorcycleDetailsModel>> {
    return getCollectionResourceMotorcycledetailsmodelGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-motorcycledetailsmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceMotorcycledetailsmodelGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceMotorcycledetailsmodelGet1$Json(params?: GetCollectionResourceMotorcycledetailsmodelGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelMotorcycleDetailsModel> {
    return this.getCollectionResourceMotorcycledetailsmodelGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelMotorcycleDetailsModel>): PagedModelEntityModelMotorcycleDetailsModel => r.body)
    );
  }

  /**
   * get-motorcycledetailsmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceMotorcycledetailsmodelGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceMotorcycledetailsmodelGet1$UriList$Response(params?: GetCollectionResourceMotorcycledetailsmodelGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceMotorcycledetailsmodelGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-motorcycledetailsmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceMotorcycledetailsmodelGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceMotorcycledetailsmodelGet1$UriList(params?: GetCollectionResourceMotorcycledetailsmodelGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceMotorcycledetailsmodelGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceMotorcycledetailsmodelPost()` */
  static readonly PostCollectionResourceMotorcycledetailsmodelPostPath = '/motorcycleDetailsModels';

  /**
   * create-motorcycledetailsmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceMotorcycledetailsmodelPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceMotorcycledetailsmodelPost$Response(params: PostCollectionResourceMotorcycledetailsmodelPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleDetailsModel>> {
    return postCollectionResourceMotorcycledetailsmodelPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-motorcycledetailsmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceMotorcycledetailsmodelPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceMotorcycledetailsmodelPost(params: PostCollectionResourceMotorcycledetailsmodelPost$Params, context?: HttpContext): Observable<EntityModelMotorcycleDetailsModel> {
    return this.postCollectionResourceMotorcycledetailsmodelPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleDetailsModel>): EntityModelMotorcycleDetailsModel => r.body)
    );
  }

  /** Path part for operation `getItemResourceMotorcycledetailsmodelGet()` */
  static readonly GetItemResourceMotorcycledetailsmodelGetPath = '/motorcycleDetailsModels/{id}';

  /**
   * get-motorcycledetailsmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceMotorcycledetailsmodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceMotorcycledetailsmodelGet$Response(params: GetItemResourceMotorcycledetailsmodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleDetailsModel>> {
    return getItemResourceMotorcycledetailsmodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-motorcycledetailsmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceMotorcycledetailsmodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceMotorcycledetailsmodelGet(params: GetItemResourceMotorcycledetailsmodelGet$Params, context?: HttpContext): Observable<EntityModelMotorcycleDetailsModel> {
    return this.getItemResourceMotorcycledetailsmodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleDetailsModel>): EntityModelMotorcycleDetailsModel => r.body)
    );
  }

  /** Path part for operation `putItemResourceMotorcycledetailsmodelPut()` */
  static readonly PutItemResourceMotorcycledetailsmodelPutPath = '/motorcycleDetailsModels/{id}';

  /**
   * update-motorcycledetailsmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceMotorcycledetailsmodelPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceMotorcycledetailsmodelPut$Response(params: PutItemResourceMotorcycledetailsmodelPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleDetailsModel>> {
    return putItemResourceMotorcycledetailsmodelPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-motorcycledetailsmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceMotorcycledetailsmodelPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceMotorcycledetailsmodelPut(params: PutItemResourceMotorcycledetailsmodelPut$Params, context?: HttpContext): Observable<EntityModelMotorcycleDetailsModel> {
    return this.putItemResourceMotorcycledetailsmodelPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleDetailsModel>): EntityModelMotorcycleDetailsModel => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceMotorcycledetailsmodelDelete()` */
  static readonly DeleteItemResourceMotorcycledetailsmodelDeletePath = '/motorcycleDetailsModels/{id}';

  /**
   * delete-motorcycledetailsmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceMotorcycledetailsmodelDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceMotorcycledetailsmodelDelete$Response(params: DeleteItemResourceMotorcycledetailsmodelDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceMotorcycledetailsmodelDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-motorcycledetailsmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceMotorcycledetailsmodelDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceMotorcycledetailsmodelDelete(params: DeleteItemResourceMotorcycledetailsmodelDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceMotorcycledetailsmodelDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceMotorcycledetailsmodelPatch()` */
  static readonly PatchItemResourceMotorcycledetailsmodelPatchPath = '/motorcycleDetailsModels/{id}';

  /**
   * patch-motorcycledetailsmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceMotorcycledetailsmodelPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceMotorcycledetailsmodelPatch$Response(params: PatchItemResourceMotorcycledetailsmodelPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelMotorcycleDetailsModel>> {
    return patchItemResourceMotorcycledetailsmodelPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-motorcycledetailsmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceMotorcycledetailsmodelPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceMotorcycledetailsmodelPatch(params: PatchItemResourceMotorcycledetailsmodelPatch$Params, context?: HttpContext): Observable<EntityModelMotorcycleDetailsModel> {
    return this.patchItemResourceMotorcycledetailsmodelPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelMotorcycleDetailsModel>): EntityModelMotorcycleDetailsModel => r.body)
    );
  }

}
