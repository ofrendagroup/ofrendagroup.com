import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthenticationConfig } from '@lernender/cdk';
//
// Authentication
//
import { LnAuthenticationService } from '@service/ln-authentication/ln-authentication.service';
import {
  AUTH_CONFIG,
  defaultAuthenticationConfig,
} from '@service/ln-authentication/ln-authentication.provider';

@NgModule({
  imports: [],
  providers: [LnAuthenticationService],
})
export class LnAuthenticationServiceModule {
  public static forRoot(
    config: AuthenticationConfig = defaultAuthenticationConfig
  ): ModuleWithProviders<LnAuthenticationServiceModule> {
    return {
      ngModule: LnAuthenticationServiceModule,
      providers: [
        LnAuthenticationService,
        { provide: AUTH_CONFIG, useValue: config },
      ],
    };
  }
}
