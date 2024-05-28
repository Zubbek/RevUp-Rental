/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceReservationmodelDelete } from '../fn/reservation-model-entity-controller/delete-item-resource-reservationmodel-delete';
import { DeleteItemResourceReservationmodelDelete$Params } from '../fn/reservation-model-entity-controller/delete-item-resource-reservationmodel-delete';
import { EntityModelReservationModel } from '../models/entity-model-reservation-model';
import { getCollectionResourceReservationmodelGet1$Json } from '../fn/reservation-model-entity-controller/get-collection-resource-reservationmodel-get-1-json';
import { GetCollectionResourceReservationmodelGet1$Json$Params } from '../fn/reservation-model-entity-controller/get-collection-resource-reservationmodel-get-1-json';
import { getCollectionResourceReservationmodelGet1$UriList } from '../fn/reservation-model-entity-controller/get-collection-resource-reservationmodel-get-1-uri-list';
import { GetCollectionResourceReservationmodelGet1$UriList$Params } from '../fn/reservation-model-entity-controller/get-collection-resource-reservationmodel-get-1-uri-list';
import { getItemResourceReservationmodelGet } from '../fn/reservation-model-entity-controller/get-item-resource-reservationmodel-get';
import { GetItemResourceReservationmodelGet$Params } from '../fn/reservation-model-entity-controller/get-item-resource-reservationmodel-get';
import { PagedModelEntityModelReservationModel } from '../models/paged-model-entity-model-reservation-model';
import { patchItemResourceReservationmodelPatch } from '../fn/reservation-model-entity-controller/patch-item-resource-reservationmodel-patch';
import { PatchItemResourceReservationmodelPatch$Params } from '../fn/reservation-model-entity-controller/patch-item-resource-reservationmodel-patch';
import { postCollectionResourceReservationmodelPost } from '../fn/reservation-model-entity-controller/post-collection-resource-reservationmodel-post';
import { PostCollectionResourceReservationmodelPost$Params } from '../fn/reservation-model-entity-controller/post-collection-resource-reservationmodel-post';
import { putItemResourceReservationmodelPut } from '../fn/reservation-model-entity-controller/put-item-resource-reservationmodel-put';
import { PutItemResourceReservationmodelPut$Params } from '../fn/reservation-model-entity-controller/put-item-resource-reservationmodel-put';

@Injectable({ providedIn: 'root' })
export class ReservationModelEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceReservationmodelGet1()` */
  static readonly GetCollectionResourceReservationmodelGet1Path = '/reservationModels';

  /**
   * get-reservationmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceReservationmodelGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceReservationmodelGet1$Json$Response(params?: GetCollectionResourceReservationmodelGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelReservationModel>> {
    return getCollectionResourceReservationmodelGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-reservationmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceReservationmodelGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceReservationmodelGet1$Json(params?: GetCollectionResourceReservationmodelGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelReservationModel> {
    return this.getCollectionResourceReservationmodelGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelReservationModel>): PagedModelEntityModelReservationModel => r.body)
    );
  }

  /**
   * get-reservationmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceReservationmodelGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceReservationmodelGet1$UriList$Response(params?: GetCollectionResourceReservationmodelGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceReservationmodelGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-reservationmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceReservationmodelGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceReservationmodelGet1$UriList(params?: GetCollectionResourceReservationmodelGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceReservationmodelGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceReservationmodelPost()` */
  static readonly PostCollectionResourceReservationmodelPostPath = '/reservationModels';

  /**
   * create-reservationmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceReservationmodelPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceReservationmodelPost$Response(params: PostCollectionResourceReservationmodelPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationModel>> {
    return postCollectionResourceReservationmodelPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-reservationmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceReservationmodelPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceReservationmodelPost(params: PostCollectionResourceReservationmodelPost$Params, context?: HttpContext): Observable<EntityModelReservationModel> {
    return this.postCollectionResourceReservationmodelPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationModel>): EntityModelReservationModel => r.body)
    );
  }

  /** Path part for operation `getItemResourceReservationmodelGet()` */
  static readonly GetItemResourceReservationmodelGetPath = '/reservationModels/{id}';

  /**
   * get-reservationmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceReservationmodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceReservationmodelGet$Response(params: GetItemResourceReservationmodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationModel>> {
    return getItemResourceReservationmodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-reservationmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceReservationmodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceReservationmodelGet(params: GetItemResourceReservationmodelGet$Params, context?: HttpContext): Observable<EntityModelReservationModel> {
    return this.getItemResourceReservationmodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationModel>): EntityModelReservationModel => r.body)
    );
  }

  /** Path part for operation `putItemResourceReservationmodelPut()` */
  static readonly PutItemResourceReservationmodelPutPath = '/reservationModels/{id}';

  /**
   * update-reservationmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceReservationmodelPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceReservationmodelPut$Response(params: PutItemResourceReservationmodelPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationModel>> {
    return putItemResourceReservationmodelPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-reservationmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceReservationmodelPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceReservationmodelPut(params: PutItemResourceReservationmodelPut$Params, context?: HttpContext): Observable<EntityModelReservationModel> {
    return this.putItemResourceReservationmodelPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationModel>): EntityModelReservationModel => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceReservationmodelDelete()` */
  static readonly DeleteItemResourceReservationmodelDeletePath = '/reservationModels/{id}';

  /**
   * delete-reservationmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceReservationmodelDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceReservationmodelDelete$Response(params: DeleteItemResourceReservationmodelDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceReservationmodelDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-reservationmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceReservationmodelDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceReservationmodelDelete(params: DeleteItemResourceReservationmodelDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceReservationmodelDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceReservationmodelPatch()` */
  static readonly PatchItemResourceReservationmodelPatchPath = '/reservationModels/{id}';

  /**
   * patch-reservationmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceReservationmodelPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceReservationmodelPatch$Response(params: PatchItemResourceReservationmodelPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationModel>> {
    return patchItemResourceReservationmodelPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-reservationmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceReservationmodelPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceReservationmodelPatch(params: PatchItemResourceReservationmodelPatch$Params, context?: HttpContext): Observable<EntityModelReservationModel> {
    return this.patchItemResourceReservationmodelPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationModel>): EntityModelReservationModel => r.body)
    );
  }

}
