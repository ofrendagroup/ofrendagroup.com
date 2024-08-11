import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Library, Response } from '@lernender/core';
//
// Services
//
import { LnHttpClientService } from '@service/ln-http/ln-http-client.service';
import { LnHttpEnvironmentService } from '@service/ln-http/ln-http-environment.service';
//
// Defining a Map Type
//
export type IMap<T> = (item: any) => T;
//
// Describe the LnHttpService Interface
//
export interface ILnHttpService {
  get<T>(
    endpoint: string,
    cb?: IMap<T>,
    param?: object
  ): Observable<Response<T>>;
  put<T>(
    endpoint: string,
    model: any,
    cb?: IMap<T>,
    param?: object
  ): Observable<Response<T>>;
  post<T>(endpoint: string, model: any, cb?: IMap<T>): Observable<Response<T>>;
  patch<T>(endpoint: string, model: any, cb?: IMap<T>): Observable<Response<T>>;
  delete<T>(
    endpoint: string,
    param?: object,
    cb?: IMap<T>
  ): Observable<Response<T>>;
}
//
// LnHttpService
//
@Injectable()
export class LnHttpService implements ILnHttpService {
    public get port() {
        return this.httpClient.port;
    }

    public set port(value: string) {
        this.httpClient.port = value;
    }

    public get server() {
        return this.httpClient.server;
    }

    public set server(value: string) {
        this.httpClient.server = value;
    }

    public get secure() {
        return this.httpClient.secure;
    }

    public set secure(value: boolean) {
        this.httpClient.secure = value;
    }

    public get prefix() {
        return this.httpClient.prefix;
    }

    public set prefix(value: string) {
        this.httpClient.prefix = value;
    }

    public get<T>(endpoint: string, cb?: IMap<T>, params?: object): Observable<Response<T>> {
        return this.httpClient.get(endpoint, params).pipe(map((resp) => new Response<T>(resp.data, cb)));
    }

    public put<T>(endpoint: string, model: any, cb?: IMap<T>, params?: object): Observable<Response<T>> {
        return this.httpClient.put(endpoint, model, params).pipe(map((resp) => new Response<T>(resp.data, cb)));
    }

    public post<T>(endpoint: string, model: any, cb?: IMap<T>): Observable<Response<T>> {
        return this.httpClient.post(endpoint, model).pipe(map((resp) => new Response<T>(resp.data, cb)));
    }

    public patch<T>(endpoint: string, model: any, cb?: IMap<T>): Observable<Response<T>> {
        return this.httpClient.patch(endpoint, model).pipe(map((resp) => new Response<T>(resp.data, cb)));
    }

    public delete<T>(endpoint: string, params?: object, cb?: IMap<T>): Observable<Response<T>> {
        return this.httpClient.delete(endpoint, params).pipe(map((resp) => new Response<T>(resp.data, cb)));
    }
    //
    // Set/Initialize Api Endpoint
    //
    public constructApiEndpoint(environment: LnHttpEnvironmentService) {
        this.prefix = 'api/v1';

        if (Library.isDefined(environment['endpoints']['api']['url'])) {
            this.server = environment['endpoints']['api']['url'];
        }
        if (Library.isDefined(environment['endpoints']['api']['port'])) {
            this.port = environment['endpoints']['api']['port'];
        }
        if (Library.isDefined(environment['endpoints']['api']['secure'])) {
            this.secure = environment['endpoints']['api']['secure'];
        }
    }
    //
    // Constructor()
    //
    constructor(private httpClient: LnHttpClientService) {
        this.prefix = 'api/v1';
        this.port = null;
        this.secure = true;
    }
}
