import { Injectable, Inject, OnDestroy } from '@angular/core';
import { Library } from '@lernender/core';
import {
  LnHttpEnvironmentConfig,
  ILnHttpEnvironmentSettings,
  HTTP_ENVIRONMENT_CONFIGURATION,
} from './ln-http-environment.provider';
//
// Window Reference
//
declare var window: any;

@Injectable({
  providedIn: 'root',
})
export class LnHttpEnvironmentService
  implements ILnHttpEnvironmentSettings, OnDestroy
{
  //
  // KeyValue Pair
  //
  [setting: string]: any;

  //
  // ngOnDestroy()
  //
  public ngOnDestroy() {}

  //
  // Constructor()
  //
  constructor(
    @Inject(HTTP_ENVIRONMENT_CONFIGURATION)
    environments: LnHttpEnvironmentConfig
  ) {
    //
    // Init hostname
    //
    let hostname: any = null;

    //
    // Extract Host Name
    //
    if (
      Library.isDefined(window.location) &&
      Library.hasOwnProperty(window, 'location') &&
      Library.hasOwnProperty(window.location, 'hostname')
    ) {
      hostname = window.location.hostname.toLowerCase();
    }
    //
    // Set Environment to the default environment
    //
    let environment = environments.default;
    //
    // If we have a host name
    //
    if (Library.isStringWithLength(hostname)) {
      //
      // Get all environment names
      //
      const environmentList: string[] = Object.keys(environments).filter(
        (item) => {
          return item !== 'default';
        }
      );
      //
      // Find Enviroment based on Hostname
      //
      let name = environmentList.find((env) => {
        if (environments[env] && environments[env]['hostname']) {
          return environments[env]['hostname'].toLowerCase() === hostname;
        } else {
          return false;
        }
      });

      // Override default behavior by setting window.environment in index.html
      if (window['environment'] && environments[window['environment']]) {
        name = window['environment'];
      }

      //
      // If we can't find a match on the environments then default to the local environment.
      //
      if (!name) {
        name = 'default';
      } else if (name && environments[name]) {
        environment = environments[name];
      }
      //
      // Set Environment Name
      //
      environment['name'] = name;
    }

    Object.assign(this, environment);
  }
}
