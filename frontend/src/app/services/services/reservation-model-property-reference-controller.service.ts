/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPropertyReferenceReservationmodelPatch$Json } from '../fn/reservation-model-property-reference-controller/create-property-reference-reservationmodel-patch-json';
import { CreatePropertyReferenceReservationmodelPatch$Json$Params } from '../fn/reservation-model-property-reference-controller/create-property-reference-reservationmodel-patch-json';
import { createPropertyReferenceReservationmodelPatch$UriList } from '../fn/reservation-model-property-reference-controller/create-property-reference-reservationmodel-patch-uri-list';
import { CreatePropertyReferenceReservationmodelPatch$UriList$Params } from '../fn/reservation-model-property-reference-controller/create-property-reference-reservationmodel-patch-uri-list';
import { createPropertyReferenceReservationmodelPut$Json } from '../fn/reservation-model-property-reference-controller/create-property-reference-reservationmodel-put-json';
import { CreatePropertyReferenceReservationmodelPut$Json$Params } from '../fn/reservation-model-property-reference-controller/create-property-reference-reservationmodel-put-json';
import { createPropertyReferenceReservationmodelPut$UriList } from '../fn/reservation-model-property-reference-controller/create-property-reference-reservationmodel-put-uri-list';
import { CreatePropertyReferenceReservationmodelPut$UriList$Params } from '../fn/reservation-model-property-reference-controller/create-property-reference-reservationmodel-put-uri-list';
import { deletePropertyReferenceIdReservationmodelDelete } from '../fn/reservation-model-property-reference-controller/delete-property-reference-id-reservationmodel-delete';
import { DeletePropertyReferenceIdReservationmodelDelete$Params } from '../fn/reservation-model-property-reference-controller/delete-property-reference-id-reservationmodel-delete';
import { deletePropertyReferenceReservationmodelDelete } from '../fn/reservation-model-property-reference-controller/delete-property-reference-reservationmodel-delete';
import { DeletePropertyReferenceReservationmodelDelete$Params } from '../fn/reservation-model-property-reference-controller/delete-property-reference-reservationmodel-delete';
import { EntityModelReservationDetailsModel } from '../models/entity-model-reservation-details-model';
import { followPropertyReferenceReservationmodelGet } from '../fn/reservation-model-property-reference-controller/follow-property-reference-reservationmodel-get';
import { FollowPropertyReferenceReservationmodelGet$Params } from '../fn/reservation-model-property-reference-controller/follow-property-reference-reservationmodel-get';
import { followPropertyReferenceReservationmodelGet1$Json } from '../fn/reservation-model-property-reference-controller/follow-property-reference-reservationmodel-get-1-json';
import { FollowPropertyReferenceReservationmodelGet1$Json$Params } from '../fn/reservation-model-property-reference-controller/follow-property-reference-reservationmodel-get-1-json';
import { followPropertyReferenceReservationmodelGet1$UriList } from '../fn/reservation-model-property-reference-controller/follow-property-reference-reservationmodel-get-1-uri-list';
import { FollowPropertyReferenceReservationmodelGet1$UriList$Params } from '../fn/reservation-model-property-reference-controller/follow-property-reference-reservationmodel-get-1-uri-list';

@Injectable({ providedIn: 'root' })
export class ReservationModelPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceReservationmodelGet1()` */
  static readonly FollowPropertyReferenceReservationmodelGet1Path = '/reservationModels/{id}/reservationDetails';

  /**
   * get-reservationdetailsmodel-by-reservationmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceReservationmodelGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceReservationmodelGet1$Json$Response(params: FollowPropertyReferenceReservationmodelGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationDetailsModel>> {
    return followPropertyReferenceReservationmodelGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-reservationdetailsmodel-by-reservationmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceReservationmodelGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceReservationmodelGet1$Json(params: FollowPropertyReferenceReservationmodelGet1$Json$Params, context?: HttpContext): Observable<EntityModelReservationDetailsModel> {
    return this.followPropertyReferenceReservationmodelGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationDetailsModel>): EntityModelReservationDetailsModel => r.body)
    );
  }

  /**
   * get-reservationdetailsmodel-by-reservationmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceReservationmodelGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceReservationmodelGet1$UriList$Response(params: FollowPropertyReferenceReservationmodelGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceReservationmodelGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-reservationdetailsmodel-by-reservationmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceReservationmodelGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceReservationmodelGet1$UriList(params: FollowPropertyReferenceReservationmodelGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceReservationmodelGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceReservationmodelPut()` */
  static readonly CreatePropertyReferenceReservationmodelPutPath = '/reservationModels/{id}/reservationDetails';

  /**
   * update-reservationdetailsmodel-by-reservationmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceReservationmodelPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceReservationmodelPut$Json$Response(params: CreatePropertyReferenceReservationmodelPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationDetailsModel>> {
    return createPropertyReferenceReservationmodelPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-reservationdetailsmodel-by-reservationmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceReservationmodelPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceReservationmodelPut$Json(params: CreatePropertyReferenceReservationmodelPut$Json$Params, context?: HttpContext): Observable<EntityModelReservationDetailsModel> {
    return this.createPropertyReferenceReservationmodelPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationDetailsModel>): EntityModelReservationDetailsModel => r.body)
    );
  }

  /**
   * update-reservationdetailsmodel-by-reservationmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceReservationmodelPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceReservationmodelPut$UriList$Response(params: CreatePropertyReferenceReservationmodelPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationDetailsModel>> {
    return createPropertyReferenceReservationmodelPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-reservationdetailsmodel-by-reservationmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceReservationmodelPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceReservationmodelPut$UriList(params: CreatePropertyReferenceReservationmodelPut$UriList$Params, context?: HttpContext): Observable<EntityModelReservationDetailsModel> {
    return this.createPropertyReferenceReservationmodelPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationDetailsModel>): EntityModelReservationDetailsModel => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceReservationmodelDelete()` */
  static readonly DeletePropertyReferenceReservationmodelDeletePath = '/reservationModels/{id}/reservationDetails';

  /**
   * delete-reservationdetailsmodel-by-reservationmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceReservationmodelDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceReservationmodelDelete$Response(params: DeletePropertyReferenceReservationmodelDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceReservationmodelDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-reservationdetailsmodel-by-reservationmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceReservationmodelDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceReservationmodelDelete(params: DeletePropertyReferenceReservationmodelDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceReservationmodelDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceReservationmodelPatch()` */
  static readonly CreatePropertyReferenceReservationmodelPatchPath = '/reservationModels/{id}/reservationDetails';

  /**
   * patch-reservationdetailsmodel-by-reservationmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceReservationmodelPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceReservationmodelPatch$Json$Response(params: CreatePropertyReferenceReservationmodelPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationDetailsModel>> {
    return createPropertyReferenceReservationmodelPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-reservationdetailsmodel-by-reservationmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceReservationmodelPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceReservationmodelPatch$Json(params: CreatePropertyReferenceReservationmodelPatch$Json$Params, context?: HttpContext): Observable<EntityModelReservationDetailsModel> {
    return this.createPropertyReferenceReservationmodelPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationDetailsModel>): EntityModelReservationDetailsModel => r.body)
    );
  }

  /**
   * patch-reservationdetailsmodel-by-reservationmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceReservationmodelPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceReservationmodelPatch$UriList$Response(params: CreatePropertyReferenceReservationmodelPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationDetailsModel>> {
    return createPropertyReferenceReservationmodelPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-reservationdetailsmodel-by-reservationmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceReservationmodelPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceReservationmodelPatch$UriList(params: CreatePropertyReferenceReservationmodelPatch$UriList$Params, context?: HttpContext): Observable<EntityModelReservationDetailsModel> {
    return this.createPropertyReferenceReservationmodelPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationDetailsModel>): EntityModelReservationDetailsModel => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceReservationmodelGet()` */
  static readonly FollowPropertyReferenceReservationmodelGetPath = '/reservationModels/{id}/reservationDetails/{propertyId}';

  /**
   * get-reservationdetailsmodel-by-reservationmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceReservationmodelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceReservationmodelGet$Response(params: FollowPropertyReferenceReservationmodelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelReservationDetailsModel>> {
    return followPropertyReferenceReservationmodelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-reservationdetailsmodel-by-reservationmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceReservationmodelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceReservationmodelGet(params: FollowPropertyReferenceReservationmodelGet$Params, context?: HttpContext): Observable<EntityModelReservationDetailsModel> {
    return this.followPropertyReferenceReservationmodelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelReservationDetailsModel>): EntityModelReservationDetailsModel => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdReservationmodelDelete()` */
  static readonly DeletePropertyReferenceIdReservationmodelDeletePath = '/reservationModels/{id}/reservationDetails/{propertyId}';

  /**
   * delete-reservationdetailsmodel-by-reservationmodel-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdReservationmodelDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdReservationmodelDelete$Response(params: DeletePropertyReferenceIdReservationmodelDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdReservationmodelDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-reservationdetailsmodel-by-reservationmodel-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdReservationmodelDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdReservationmodelDelete(params: DeletePropertyReferenceIdReservationmodelDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdReservationmodelDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
