import { NgModule, ModuleWithProviders } from '@angular/core';
/**
 * Services
 */
import { LnHttpClientService } from './ln-http-client.service';
import { LnHttpService } from './ln-http.service';
import { LnHttpEnvironmentService } from './ln-http-environment.service';
//
// Provider(s)
//
import {
  LnHttpEnvironmentConfig,
  DefaultLnHttpEnvironmentConfig,
  HTTP_ENVIRONMENT_CONFIGURATION,
} from './ln-http-environment.provider';

@NgModule({
  imports: [],
  providers: [LnHttpClientService, LnHttpService, LnHttpEnvironmentService],
})
export class LnHttpModule {
  /**
   * forRoot()
   */
  public static forRoot(
    config: LnHttpEnvironmentConfig = DefaultLnHttpEnvironmentConfig
  ): ModuleWithProviders<LnHttpModule> {
    return {
      ngModule: LnHttpModule,
      providers: [
        LnHttpClientService,
        LnHttpService,
        LnHttpEnvironmentService,
        { provide: DefaultLnHttpEnvironmentConfig, useValue: config },
        
      ],
    };
  }
}
