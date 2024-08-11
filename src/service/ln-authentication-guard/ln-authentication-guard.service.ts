import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad } from '@angular/router';

/**
 * Services
 */
import { LnAuthenticationService } from '@service/ln-authentication/ln-authentication.service';
import { Observable } from 'rxjs';

@Injectable()
export class LnAuthenticationGuardService
  implements CanActivate, CanActivateChild, CanLoad
{
  /**
   * canActivate()
   */
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.service.isAuthenticated();
  }

  /**
   * canActivateChild()
   */
  canActivateChild(): Observable<boolean> | Promise<boolean> | boolean {
    return this.service.isAuthenticated();
  }

  /**
   * canLoad()
   */
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  /**
   * constructor()
   */
  constructor(private service: LnAuthenticationService) {}
}
