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
// LnAuthenticationGuardService
//
import { LnAuthenticationGuardService } from '@service/ln-authentication-guard/ln-authentication-guard.service';

@NgModule({
  imports: [RouterModule, LnAuthenticationServiceModule],
  providers: [LnAuthenticationGuardService],
})
//
// LnGuardServiceModule
//
export class LnGuardServiceModule {
  public static forRoot(
    config: AuthenticationConfig = defaultAuthenticationConfig
  ): ModuleWithProviders<LnGuardServiceModule> {
    return {
      ngModule: LnGuardServiceModule,
      providers: [
        { provide: AUTH_CONFIG, useValue: config },
        {
          provide: LnAuthenticationService,
          useFactory: AuthenticationServiceFactory,
          deps: [AUTH_CONFIG],
        },
        LnAuthenticationGuardService,
      ],
    };
  }
}
