/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceReservationdetailsmodelDelete } from '../fn/reservation-details-model-entity-controller/delete-item-resource-reservationdetailsmodel-delete';
import { DeleteItemResourceReservationdetailsmodelDelete$Params } from '../fn/reservation-details-model-entity-controller/delete-item-resource-reservationdetailsmodel-delete';
import { EntityModelReservationDetailsModel } from '../models/entity-model-reservation-details-model';
import { getCollectionResourceReservationdetailsmodelGet1$Json } from '../fn/reservation-details-model-entity-controller/get-collection-resource-reservationdetailsmodel-get-1-json';
import { GetCollectionResourceReservationdetailsmodelGet1$Json$Params } from '../fn/reservation-details-model-entity-controller/get-collection-resource-reservationdetailsmodel-get-1-json';
import { getCollectionResourceReservationdetailsmodelGet1$UriList } from '../fn/reservation-details-model-entity-controller/get-collection-resource-reservationdetailsmodel-get-1-uri-list';
import { GetCollectionResourceReservationdetailsmodelGet1$UriList$Params } from '../fn/reservation-details-model-entity-controller/get-collection-resource-reservationdetailsmodel-get-1-uri-list';
import { getItemResourceReservationdetailsmodelGet } from '../fn/reservation-details-model-entity-controller/get-item-resource-reservationdetailsmodel-get';
import { GetItemResourceReservationdetailsmodelGet$Params } from '../fn/reservation-details-model-entity-controller/get-item-resource-reservationdetailsmodel-get';
import { PagedModelEntityModelReservationDetailsModel } from '../models/paged-model-entity-model-reservation-details-model';
import { patchItemResourceReservationdetailsmodelPatch } from '../fn/reservation-details-model-entity-controller/patch-item-resource-reservationdetailsmodel-patch';
import { PatchItemResourceReservationdetailsmodelPatch$Params } from '../fn/reservation-details-model-entity-controller/patch-item-resource-reservationdetailsmodel-patch';
import { postCollectionResourceReservationdetailsmodelPost } from '../fn/reservation-details-model-entity-controller/post-collection-resource-reservationdetailsmodel-post';
import { PostCollectionResourceReservationdetailsmodelPost$Params } from '../fn/reservation-details-model-entity-controller/post-collection-resource-reservationdetailsmodel-post';
import { putItemResourceReservationdetailsmodelPut } from '../fn/reservation-details-model-entity-controller/put-item-resource-reservationdetailsmodel-put';
import { PutItemResourceReservationdetailsmodelPut$Params } from '../fn/reservation-details-model-entity-controller/put-item-resource-reservationdetailsmodel-put';

@Injectable({ providedIn: 'root' })
export class ReservationDetailsModelEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceReservationdetailsmodelGet1()` */
  static readonly GetCollectionResourceReservationdetailsmodelGet1Path = '/reservationDetailsModels';

  /**
   * get-reservationdetailsmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceReservationdetailsmodelGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceReservationdetailsmodelGet1$Json$Response(params?: GetCollectionResourceReservationdetailsmodelGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelReservationDetailsModel>> {
    return getCollectionResourceReservationdetailsmodelGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-reservationdetailsmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceReservationdetailsmodelGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceReservationdetailsmodelGet1$Json(params?: GetCollectionResourceReservationdetailsmodelGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelReservationDetailsModel> {
    return this.getCollectionResourceReservationdetailsmodelGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelReservationDetailsModel>): PagedModelEntityModelReservationDetailsModel => r.body)
    );
  }

  /**
   * get-reservationdetailsmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceReservationdetailsmodelGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceReservationdetailsmodelGet1$UriList$Response(params?: GetCollectionResourceReservationdetailsmodelGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceReservationdetailsmodelGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-reservationdetailsmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceReservationdetailsmodelGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceReservationdetailsmodelGet1$UriList(params?: GetCollectionResourceReservationdetailsmodelGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceReservationdetailsmodelGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceReservationdetailsmodelPost()` */
  static readonly PostCollectionResourceReservationdetailsmodelPostPath = '/reservationDetailsModels';

  /**
   * create-reservationdetailsmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceReservationdetailsmodelPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceReservationdetailsmodelPost$Response(params: PostCollectionResourceReservationdetailsmodelPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationDetailsModel>> {
    return postCollectionResourceReservationdetailsmodelPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-reservationdetailsmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceReservationdetailsmodelPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceReservationdetailsmodelPost(params: PostCollectionResourceReservationdetailsmodelPost$Params, context?: HttpContext): Observable<EntityModelReservationDetailsModel> {
    return this.postCollectionResourceReservationdetailsmodelPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationDetailsModel>): EntityModelReservationDetailsModel => r.body)
    );
  }

  /** Path part for operation `getItemResourceReservationdetailsmodelGet()` */
  static readonly GetItemResourceReservationdetailsmodelGetPath = '/reservationDetailsModels/{id}';

  /**
   * get-reservationdetailsmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceReservationdetailsmodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceReservationdetailsmodelGet$Response(params: GetItemResourceReservationdetailsmodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationDetailsModel>> {
    return getItemResourceReservationdetailsmodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-reservationdetailsmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceReservationdetailsmodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceReservationdetailsmodelGet(params: GetItemResourceReservationdetailsmodelGet$Params, context?: HttpContext): Observable<EntityModelReservationDetailsModel> {
    return this.getItemResourceReservationdetailsmodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationDetailsModel>): EntityModelReservationDetailsModel => r.body)
    );
  }

  /** Path part for operation `putItemResourceReservationdetailsmodelPut()` */
  static readonly PutItemResourceReservationdetailsmodelPutPath = '/reservationDetailsModels/{id}';

  /**
   * update-reservationdetailsmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceReservationdetailsmodelPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceReservationdetailsmodelPut$Response(params: PutItemResourceReservationdetailsmodelPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationDetailsModel>> {
    return putItemResourceReservationdetailsmodelPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-reservationdetailsmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceReservationdetailsmodelPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceReservationdetailsmodelPut(params: PutItemResourceReservationdetailsmodelPut$Params, context?: HttpContext): Observable<EntityModelReservationDetailsModel> {
    return this.putItemResourceReservationdetailsmodelPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationDetailsModel>): EntityModelReservationDetailsModel => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceReservationdetailsmodelDelete()` */
  static readonly DeleteItemResourceReservationdetailsmodelDeletePath = '/reservationDetailsModels/{id}';

  /**
   * delete-reservationdetailsmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceReservationdetailsmodelDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceReservationdetailsmodelDelete$Response(params: DeleteItemResourceReservationdetailsmodelDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceReservationdetailsmodelDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-reservationdetailsmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceReservationdetailsmodelDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceReservationdetailsmodelDelete(params: DeleteItemResourceReservationdetailsmodelDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceReservationdetailsmodelDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceReservationdetailsmodelPatch()` */
  static readonly PatchItemResourceReservationdetailsmodelPatchPath = '/reservationDetailsModels/{id}';

  /**
   * patch-reservationdetailsmodel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceReservationdetailsmodelPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceReservationdetailsmodelPatch$Response(params: PatchItemResourceReservationdetailsmodelPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationDetailsModel>> {
    return patchItemResourceReservationdetailsmodelPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-reservationdetailsmodel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceReservationdetailsmodelPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceReservationdetailsmodelPatch(params: PatchItemResourceReservationdetailsmodelPatch$Params, context?: HttpContext): Observable<EntityModelReservationDetailsModel> {
    return this.patchItemResourceReservationdetailsmodelPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationDetailsModel>): EntityModelReservationDetailsModel => r.body)
    );
  }

}
