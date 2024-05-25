/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceFavouritesmodelDelete } from '../fn/favourites-model-entity-controller/delete-item-resource-favouritesmodel-delete';
import { DeleteItemResourceFavouritesmodelDelete$Params } from '../fn/favourites-model-entity-controller/delete-item-resource-favouritesmodel-delete';
import { EntityModelFavouritesModel } from '../models/entity-model-favourites-model';
import { getCollectionResourceFavouritesmodelGet1$Json } from '../fn/favourites-model-entity-controller/get-collection-resource-favouritesmodel-get-1-json';
import { GetCollectionResourceFavouritesmodelGet1$Json$Params } from '../fn/favourites-model-entity-controller/get-collection-resource-favouritesmodel-get-1-json';
import { getCollectionResourceFavouritesmodelGet1$UriList } from '../fn/favourites-model-entity-controller/get-collection-resource-favouritesmodel-get-1-uri-list';
import { GetCollectionResourceFavouritesmodelGet1$UriList$Params } from '../fn/favourites-model-entity-controller/get-collection-resource-favouritesmodel-get-1-uri-list';
import { getItemResourceFavouritesmodelGet } from '../fn/favourites-model-entity-controller/get-item-resource-favouritesmodel-get';
import { GetItemResourceFavouritesmodelGet$Params } from '../fn/favourites-model-entity-controller/get-item-resource-favouritesmodel-get';
import { PagedModelEntityModelFavouritesModel } from '../models/paged-model-entity-model-favourites-model';
import { patchItemResourceFavouritesmodelPatch } from '../fn/favourites-model-entity-controller/patch-item-resource-favouritesmodel-patch';
import { PatchItemResourceFavouritesmodelPatch$Params } from '../fn/favourites-model-entity-controller/patch-item-resource-favouritesmodel-patch';
import { postCollectionResourceFavouritesmodelPost } from '../fn/favourites-model-entity-controller/post-collection-resource-favouritesmodel-post';
import { PostCollectionResourceFavouritesmodelPost$Params } from '../fn/favourites-model-entity-controller/post-collection-resource-favouritesmodel-post';
import { putItemResourceFavouritesmodelPut } from '../fn/favourites-model-entity-controller/put-item-resource-favouritesmodel-put';
import { PutItemResourceFavouritesmodelPut$Params } from '../fn/favourites-model-entity-controller/put-item-resource-favouritesmodel-put';

@Injectable({ providedIn: 'root' })
export class FavouritesModelEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceFavouritesmodelGet1()` */
  static readonly GetCollectionResourceFavouritesmodelGet1Path = '/favouritesModels';

  /**
   * get-favouritesmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceFavouritesmodelGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFavouritesmodelGet1$Json$Response(params?: GetCollectionResourceFavouritesmodelGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelFavouritesModel>> {
    return getCollectionResourceFavouritesmodelGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-favouritesmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceFavouritesmodelGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFavouritesmodelGet1$Json(params?: GetCollectionResourceFavouritesmodelGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelFavouritesModel> {
    return this.getCollectionResourceFavouritesmodelGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelFavouritesModel>): PagedModelEntityModelFavouritesModel => r.body)
    );
  }

  /**
   * get-favouritesmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceFavouritesmodelGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFavouritesmodelGet1$UriList$Response(params?: GetCollectionResourceFavouritesmodelGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceFavouritesmodelGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-favouritesmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceFavouritesmodelGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFavouritesmodelGet1$UriList(params?: GetCollectionResourceFavouritesmodelGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceFavouritesmodelGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceFavouritesmodelPost()` */
  static readonly PostCollectionResourceFavouritesmodelPostPath = '/favouritesModels';

  /**
   * create-favouritesmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceFavouritesmodelPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceFavouritesmodelPost$Response(params: PostCollectionResourceFavouritesmodelPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFavouritesModel>> {
    return postCollectionResourceFavouritesmodelPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-favouritesmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceFavouritesmodelPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceFavouritesmodelPost(params: PostCollectionResourceFavouritesmodelPost$Params, context?: HttpContext): Observable<EntityModelFavouritesModel> {
    return this.postCollectionResourceFavouritesmodelPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFavouritesModel>): EntityModelFavouritesModel => r.body)
    );
  }

  /** Path part for operation `getItemResourceFavouritesmodelGet()` */
  static readonly GetItemResourceFavouritesmodelGetPath = '/favouritesModels/{id}';

  /**
   * get-favouritesmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceFavouritesmodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceFavouritesmodelGet$Response(params: GetItemResourceFavouritesmodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFavouritesModel>> {
    return getItemResourceFavouritesmodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-favouritesmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceFavouritesmodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceFavouritesmodelGet(params: GetItemResourceFavouritesmodelGet$Params, context?: HttpContext): Observable<EntityModelFavouritesModel> {
    return this.getItemResourceFavouritesmodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFavouritesModel>): EntityModelFavouritesModel => r.body)
    );
  }

  /** Path part for operation `putItemResourceFavouritesmodelPut()` */
  static readonly PutItemResourceFavouritesmodelPutPath = '/favouritesModels/{id}';

  /**
   * update-favouritesmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceFavouritesmodelPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceFavouritesmodelPut$Response(params: PutItemResourceFavouritesmodelPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFavouritesModel>> {
    return putItemResourceFavouritesmodelPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-favouritesmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceFavouritesmodelPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceFavouritesmodelPut(params: PutItemResourceFavouritesmodelPut$Params, context?: HttpContext): Observable<EntityModelFavouritesModel> {
    return this.putItemResourceFavouritesmodelPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFavouritesModel>): EntityModelFavouritesModel => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceFavouritesmodelDelete()` */
  static readonly DeleteItemResourceFavouritesmodelDeletePath = '/favouritesModels/{id}';

  /**
   * delete-favouritesmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceFavouritesmodelDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceFavouritesmodelDelete$Response(params: DeleteItemResourceFavouritesmodelDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceFavouritesmodelDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-favouritesmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceFavouritesmodelDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceFavouritesmodelDelete(params: DeleteItemResourceFavouritesmodelDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceFavouritesmodelDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceFavouritesmodelPatch()` */
  static readonly PatchItemResourceFavouritesmodelPatchPath = '/favouritesModels/{id}';

  /**
   * patch-favouritesmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceFavouritesmodelPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceFavouritesmodelPatch$Response(params: PatchItemResourceFavouritesmodelPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFavouritesModel>> {
    return patchItemResourceFavouritesmodelPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-favouritesmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceFavouritesmodelPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceFavouritesmodelPatch(params: PatchItemResourceFavouritesmodelPatch$Params, context?: HttpContext): Observable<EntityModelFavouritesModel> {
    return this.patchItemResourceFavouritesmodelPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFavouritesModel>): EntityModelFavouritesModel => r.body)
    );
  }

}
