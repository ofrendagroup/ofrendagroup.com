import { InjectionToken } from '@angular/core';

export interface ILnHttpEnvironmentSettings {
  [setting: string]: any;
}

export interface LnHttpEnvironmentConfig {
  default: ILnHttpEnvironmentSettings;
  [environment: string]: ILnHttpEnvironmentSettings;
}

export const DefaultLnHttpEnvironmentConfig: LnHttpEnvironmentConfig = {
  default: {},
};

export const HTTP_ENVIRONMENT_CONFIGURATION =
  new InjectionToken<LnHttpEnvironmentConfig>('http-environment-config');
