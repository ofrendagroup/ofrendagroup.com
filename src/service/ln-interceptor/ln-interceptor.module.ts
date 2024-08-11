import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationConfig } from '@lernender/cdk';
//
// Authentication Service Module
//
import { LnAuthenticationServiceModule } from '@service/ln-authentication/ln-authentication.module';
//
// Authentication Service
//
import { LnAuthenticationService } from '@service/ln-authentication/ln-authentication.service';
//
// Authentication Provider
//
import {
  AUTH_CONFIG,
  defaultAuthenticationConfig,
  AuthenticationServiceFactory,
} from '@service/ln-authentication/ln-authentication.provider';
//
// Get the Interceptor Service
//
import { LnInterceptorService } from '@service/ln-interceptor/ln-interceptor.service';

@NgModule({
  imports: [RouterModule, LnAuthenticationServiceModule],
  providers: [LnAuthenticationService],
})
//
// InterceptorServiceModule
//
export class LnInterceptorServiceModule {
  public static forRoot(
    config: AuthenticationConfig = defaultAuthenticationConfig
  ): ModuleWithProviders<LnInterceptorServiceModule> {
    return {
      ngModule: LnAuthenticationServiceModule,
      providers: [
        { provide: AUTH_CONFIG, useValue: config },
        {
          provide: LnAuthenticationService,
          useFactory: AuthenticationServiceFactory,
          deps: [AUTH_CONFIG],
        },
        LnInterceptorService,
      ],
    };
  }
}
