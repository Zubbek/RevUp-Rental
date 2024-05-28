/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { FavouritesModelEntityControllerService } from './services/favourites-model-entity-controller.service';
import { FavouritesModelSearchControllerService } from './services/favourites-model-search-controller.service';
import { FavouritesModelPropertyReferenceControllerService } from './services/favourites-model-property-reference-controller.service';
import { MotorcycleDetailsModelEntityControllerService } from './services/motorcycle-details-model-entity-controller.service';
import { MotorcycleDetailsModelSearchControllerService } from './services/motorcycle-details-model-search-controller.service';
import { MotorcycleDetailsModelPropertyReferenceControllerService } from './services/motorcycle-details-model-property-reference-controller.service';
import { MotorcycleModelEntityControllerService } from './services/motorcycle-model-entity-controller.service';
import { MotorcycleModelSearchControllerService } from './services/motorcycle-model-search-controller.service';
import { MotorcycleModelPropertyReferenceControllerService } from './services/motorcycle-model-property-reference-controller.service';
import { ProfileControllerService } from './services/profile-controller.service';
import { ReservationDetailsModelEntityControllerService } from './services/reservation-details-model-entity-controller.service';
import { ReservationDetailsModelPropertyReferenceControllerService } from './services/reservation-details-model-property-reference-controller.service';
import { ReservationModelEntityControllerService } from './services/reservation-model-entity-controller.service';
import { ReservationModelSearchControllerService } from './services/reservation-model-search-controller.service';
import { ReservationModelPropertyReferenceControllerService } from './services/reservation-model-property-reference-controller.service';
import { RoleEntityControllerService } from './services/role-entity-controller.service';
import { RoleSearchControllerService } from './services/role-search-controller.service';
import { UserModelEntityControllerService } from './services/user-model-entity-controller.service';
import { UserModelSearchControllerService } from './services/user-model-search-controller.service';
import { UserModelPropertyReferenceControllerService } from './services/user-model-property-reference-controller.service';
import { UserControllerService } from './services/user-controller.service';
import { ReservationControllerService } from './services/reservation-controller.service';
import { AuthenticationService } from './services/authentication.service';
import { FavouritesControllerService } from './services/favourites-controller.service';
import { MotorcycleControllerService } from './services/motorcycle-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    FavouritesModelEntityControllerService,
    FavouritesModelSearchControllerService,
    FavouritesModelPropertyReferenceControllerService,
    MotorcycleDetailsModelEntityControllerService,
    MotorcycleDetailsModelSearchControllerService,
    MotorcycleDetailsModelPropertyReferenceControllerService,
    MotorcycleModelEntityControllerService,
    MotorcycleModelSearchControllerService,
    MotorcycleModelPropertyReferenceControllerService,
    ProfileControllerService,
    ReservationDetailsModelEntityControllerService,
    ReservationDetailsModelPropertyReferenceControllerService,
    ReservationModelEntityControllerService,
    ReservationModelSearchControllerService,
    ReservationModelPropertyReferenceControllerService,
    RoleEntityControllerService,
    RoleSearchControllerService,
    UserModelEntityControllerService,
    UserModelSearchControllerService,
    UserModelPropertyReferenceControllerService,
    UserControllerService,
    ReservationControllerService,
    AuthenticationService,
    FavouritesControllerService,
    MotorcycleControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
