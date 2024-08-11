import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LnTextFileService {
  //
  // Get
  //
  public get(file: string): Observable<any> {
    return this.httpClient.get(file, {
      responseType: 'text',
    });
  }

  //
  // Constructor
  //
  constructor(private httpClient: HttpClient) {}
}
