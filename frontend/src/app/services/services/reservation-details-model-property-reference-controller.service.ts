/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPropertyReferenceReservationdetailsmodelPatch$Json } from '../fn/reservation-details-model-property-reference-controller/create-property-reference-reservationdetailsmodel-patch-json';
import { CreatePropertyReferenceReservationdetailsmodelPatch$Json$Params } from '../fn/reservation-details-model-property-reference-controller/create-property-reference-reservationdetailsmodel-patch-json';
import { createPropertyReferenceReservationdetailsmodelPatch$UriList } from '../fn/reservation-details-model-property-reference-controller/create-property-reference-reservationdetailsmodel-patch-uri-list';
import { CreatePropertyReferenceReservationdetailsmodelPatch$UriList$Params } from '../fn/reservation-details-model-property-reference-controller/create-property-reference-reservationdetailsmodel-patch-uri-list';
import { createPropertyReferenceReservationdetailsmodelPut$Json } from '../fn/reservation-details-model-property-reference-controller/create-property-reference-reservationdetailsmodel-put-json';
import { CreatePropertyReferenceReservationdetailsmodelPut$Json$Params } from '../fn/reservation-details-model-property-reference-controller/create-property-reference-reservationdetailsmodel-put-json';
import { createPropertyReferenceReservationdetailsmodelPut$UriList } from '../fn/reservation-details-model-property-reference-controller/create-property-reference-reservationdetailsmodel-put-uri-list';
import { CreatePropertyReferenceReservationdetailsmodelPut$UriList$Params } from '../fn/reservation-details-model-property-reference-controller/create-property-reference-reservationdetailsmodel-put-uri-list';
import { deletePropertyReferenceIdReservationdetailsmodelDelete } from '../fn/reservation-details-model-property-reference-controller/delete-property-reference-id-reservationdetailsmodel-delete';
import { DeletePropertyReferenceIdReservationdetailsmodelDelete$Params } from '../fn/reservation-details-model-property-reference-controller/delete-property-reference-id-reservationdetailsmodel-delete';
import { deletePropertyReferenceReservationdetailsmodelDelete } from '../fn/reservation-details-model-property-reference-controller/delete-property-reference-reservationdetailsmodel-delete';
import { DeletePropertyReferenceReservationdetailsmodelDelete$Params } from '../fn/reservation-details-model-property-reference-controller/delete-property-reference-reservationdetailsmodel-delete';
import { EntityModelReservationModel } from '../models/entity-model-reservation-model';
import { followPropertyReferenceReservationdetailsmodelGet } from '../fn/reservation-details-model-property-reference-controller/follow-property-reference-reservationdetailsmodel-get';
import { FollowPropertyReferenceReservationdetailsmodelGet$Params } from '../fn/reservation-details-model-property-reference-controller/follow-property-reference-reservationdetailsmodel-get';
import { followPropertyReferenceReservationdetailsmodelGet1$Json } from '../fn/reservation-details-model-property-reference-controller/follow-property-reference-reservationdetailsmodel-get-1-json';
import { FollowPropertyReferenceReservationdetailsmodelGet1$Json$Params } from '../fn/reservation-details-model-property-reference-controller/follow-property-reference-reservationdetailsmodel-get-1-json';
import { followPropertyReferenceReservationdetailsmodelGet1$UriList } from '../fn/reservation-details-model-property-reference-controller/follow-property-reference-reservationdetailsmodel-get-1-uri-list';
import { FollowPropertyReferenceReservationdetailsmodelGet1$UriList$Params } from '../fn/reservation-details-model-property-reference-controller/follow-property-reference-reservationdetailsmodel-get-1-uri-list';

@Injectable({ providedIn: 'root' })
export class ReservationDetailsModelPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceReservationdetailsmodelGet1()` */
  static readonly FollowPropertyReferenceReservationdetailsmodelGet1Path = '/reservationDetailsModels/{id}/reservation';

  /**
   * get-reservationmodel-by-reservationdetailsmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceReservationdetailsmodelGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceReservationdetailsmodelGet1$Json$Response(params: FollowPropertyReferenceReservationdetailsmodelGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationModel>> {
    return followPropertyReferenceReservationdetailsmodelGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-reservationmodel-by-reservationdetailsmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceReservationdetailsmodelGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceReservationdetailsmodelGet1$Json(params: FollowPropertyReferenceReservationdetailsmodelGet1$Json$Params, context?: HttpContext): Observable<EntityModelReservationModel> {
    return this.followPropertyReferenceReservationdetailsmodelGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationModel>): EntityModelReservationModel => r.body)
    );
  }

  /**
   * get-reservationmodel-by-reservationdetailsmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceReservationdetailsmodelGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceReservationdetailsmodelGet1$UriList$Response(params: FollowPropertyReferenceReservationdetailsmodelGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceReservationdetailsmodelGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-reservationmodel-by-reservationdetailsmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceReservationdetailsmodelGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceReservationdetailsmodelGet1$UriList(params: FollowPropertyReferenceReservationdetailsmodelGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceReservationdetailsmodelGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceReservationdetailsmodelPut()` */
  static readonly CreatePropertyReferenceReservationdetailsmodelPutPath = '/reservationDetailsModels/{id}/reservation';

  /**
   * update-reservationmodel-by-reservationdetailsmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceReservationdetailsmodelPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceReservationdetailsmodelPut$Json$Response(params: CreatePropertyReferenceReservationdetailsmodelPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationModel>> {
    return createPropertyReferenceReservationdetailsmodelPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-reservationmodel-by-reservationdetailsmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceReservationdetailsmodelPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceReservationdetailsmodelPut$Json(params: CreatePropertyReferenceReservationdetailsmodelPut$Json$Params, context?: HttpContext): Observable<EntityModelReservationModel> {
    return this.createPropertyReferenceReservationdetailsmodelPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationModel>): EntityModelReservationModel => r.body)
    );
  }

  /**
   * update-reservationmodel-by-reservationdetailsmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceReservationdetailsmodelPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceReservationdetailsmodelPut$UriList$Response(params: CreatePropertyReferenceReservationdetailsmodelPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationModel>> {
    return createPropertyReferenceReservationdetailsmodelPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-reservationmodel-by-reservationdetailsmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceReservationdetailsmodelPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceReservationdetailsmodelPut$UriList(params: CreatePropertyReferenceReservationdetailsmodelPut$UriList$Params, context?: HttpContext): Observable<EntityModelReservationModel> {
    return this.createPropertyReferenceReservationdetailsmodelPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationModel>): EntityModelReservationModel => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceReservationdetailsmodelDelete()` */
  static readonly DeletePropertyReferenceReservationdetailsmodelDeletePath = '/reservationDetailsModels/{id}/reservation';

  /**
   * delete-reservationmodel-by-reservationdetailsmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceReservationdetailsmodelDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceReservationdetailsmodelDelete$Response(params: DeletePropertyReferenceReservationdetailsmodelDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceReservationdetailsmodelDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-reservationmodel-by-reservationdetailsmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceReservationdetailsmodelDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceReservationdetailsmodelDelete(params: DeletePropertyReferenceReservationdetailsmodelDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceReservationdetailsmodelDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceReservationdetailsmodelPatch()` */
  static readonly CreatePropertyReferenceReservationdetailsmodelPatchPath = '/reservationDetailsModels/{id}/reservation';

  /**
   * patch-reservationmodel-by-reservationdetailsmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceReservationdetailsmodelPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceReservationdetailsmodelPatch$Json$Response(params: CreatePropertyReferenceReservationdetailsmodelPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationModel>> {
    return createPropertyReferenceReservationdetailsmodelPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-reservationmodel-by-reservationdetailsmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceReservationdetailsmodelPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceReservationdetailsmodelPatch$Json(params: CreatePropertyReferenceReservationdetailsmodelPatch$Json$Params, context?: HttpContext): Observable<EntityModelReservationModel> {
    return this.createPropertyReferenceReservationdetailsmodelPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationModel>): EntityModelReservationModel => r.body)
    );
  }

  /**
   * patch-reservationmodel-by-reservationdetailsmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceReservationdetailsmodelPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceReservationdetailsmodelPatch$UriList$Response(params: CreatePropertyReferenceReservationdetailsmodelPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationModel>> {
    return createPropertyReferenceReservationdetailsmodelPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-reservationmodel-by-reservationdetailsmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceReservationdetailsmodelPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceReservationdetailsmodelPatch$UriList(params: CreatePropertyReferenceReservationdetailsmodelPatch$UriList$Params, context?: HttpContext): Observable<EntityModelReservationModel> {
    return this.createPropertyReferenceReservationdetailsmodelPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationModel>): EntityModelReservationModel => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceReservationdetailsmodelGet()` */
  static readonly FollowPropertyReferenceReservationdetailsmodelGetPath = '/reservationDetailsModels/{id}/reservation/{propertyId}';

  /**
   * get-reservationmodel-by-reservationdetailsmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceReservationdetailsmodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceReservationdetailsmodelGet$Response(params: FollowPropertyReferenceReservationdetailsmodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationModel>> {
    return followPropertyReferenceReservationdetailsmodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-reservationmodel-by-reservationdetailsmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceReservationdetailsmodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceReservationdetailsmodelGet(params: FollowPropertyReferenceReservationdetailsmodelGet$Params, context?: HttpContext): Observable<EntityModelReservationModel> {
    return this.followPropertyReferenceReservationdetailsmodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationModel>): EntityModelReservationModel => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdReservationdetailsmodelDelete()` */
  static readonly DeletePropertyReferenceIdReservationdetailsmodelDeletePath = '/reservationDetailsModels/{id}/reservation/{propertyId}';

  /**
   * delete-reservationmodel-by-reservationdetailsmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdReservationdetailsmodelDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdReservationdetailsmodelDelete$Response(params: DeletePropertyReferenceIdReservationdetailsmodelDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdReservationdetailsmodelDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-reservationmodel-by-reservationdetailsmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdReservationdetailsmodelDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdReservationdetailsmodelDelete(params: DeletePropertyReferenceIdReservationdetailsmodelDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdReservationdetailsmodelDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
