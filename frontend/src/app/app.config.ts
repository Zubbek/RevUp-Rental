import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {httpTokenInterceptor} from "./services/interceptor/http-token.interceptor";
import {provideToastr} from "ngx-toastr";
import {provideAnimations, provideNoopAnimations} from "@angular/platform-browser/animations";
import {provideNativeDateAdapter} from "@angular/material/core";


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimations(),
    provideHttpClient(),
    provideHttpClient(withInterceptors([httpTokenInterceptor])),
    provideToastr(), provideAnimationsAsync(),
    provideNativeDateAdapter(),
    provideNoopAnimations()
  ],
};


