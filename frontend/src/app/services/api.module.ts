/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { ProfileControllerService } from './services/profile-controller.service';
import { RoleEntityControllerService } from './services/role-entity-controller.service';
import { RoleSearchControllerService } from './services/role-search-controller.service';
import { UserModelEntityControllerService } from './services/user-model-entity-controller.service';
import { UserModelSearchControllerService } from './services/user-model-search-controller.service';
import { UserModelPropertyReferenceControllerService } from './services/user-model-property-reference-controller.service';
import { AuthenticationService } from './services/authentication.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ProfileControllerService,
    RoleEntityControllerService,
    RoleSearchControllerService,
    UserModelEntityControllerService,
    UserModelSearchControllerService,
    UserModelPropertyReferenceControllerService,
    AuthenticationService,
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
