import { Injectable } from '@angular/core';
import { Library } from '@lernender/core';
//
// @Library
//
import { LocalStorageKey } from '@library/enum/localStorageKey';
//
// Window Reference
//
declare var window: Window;

@Injectable({
  providedIn: 'root',
})
export class LnAuthenticationService {
  //
  // Private Variables
  //
  private _token: any | undefined;
  //
  // token
  //
  public get token(): any | undefined {
    return this._token;
  }
  //
  // setToken
  //
  public setToken(value: any): any | undefined {
    if (Library.isDefined(value)) {
      //
      // Persist the authorization token
      //
      window.sessionStorage.setItem(
        LocalStorageKey.Token,
        JSON.stringify(value)
      );
      //
      // Refresh Token
      //
      this.refreshToken();
    }
  }

  //
  // refreshToken()
  //
  private refreshToken(): any | undefined {
    //
    // Get the token
    //
    let token = window.sessionStorage.getItem(LocalStorageKey.Token);
    //
    // Parse token
    //
    if (!Library.isNullOrUndefined(token)) {
      this._token = JSON.parse(token);
    }
  }

  //
  // Has Token
  //
  hasToken(): boolean {
    return Library.isNullOrUndefined(this._token);
  }

  //
  // isAuthenticated
  //
  isAuthenticated(): boolean {
    return this.hasToken();
  }

  //
  // Constructor()
  //
  public LnAuthenticationService() {
    //
    // Refresh Token
    //
    this.refreshToken();
  }
}
