import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Library } from '@lernender/core';
import { Observable } from 'rxjs';

@Injectable()
export class LnHttpClientService {
    public port: string;
    public secure: boolean;
    public server: string;
    public prefix: string;

    /**
     * createUrl()
     */
    public createUrl(endpoint: string): string {
        let url = 'HTTP://SERVER';

        if (Library.isStringWithLength(this.port?.toString())) {
            url += ':PORT';
        }

        if (Library.isStringWithLength(this?.prefix)) {
            url += '/PREFIX';
        }

        if (Library.isStringWithLength(endpoint)) {
            url += '/ENDPOINT';
        }

        url = url
            .replace(/HTTP/g, this.secure ? 'https' : 'http')
            .replace(/SERVER/g, Library.isStringWithLength(this.server) ? this.server : '')
            .replace(/PORT/g, Library.isStringWithLength(this.port) ? this.port : '')
            .replace(/PREFIX/g, Library.isStringWithLength(this.prefix) ? this.prefix : '')
            .replace(/ENDPOINT/g, Library.isStringWithLength(endpoint) ? endpoint : '')
            .trim();

        return url;
    }

    /**
     * get()
     * @param endpoint
     * @param params
     */
    public get(endpoint: string, params?: any): Observable<any> {
        return this.http.get(this.createUrl(endpoint), {
            params: params,
        });
    }

    /**
     * put()
     * @param endpoint
     * @param model
     * @param params
     */
    public put(endpoint: string, model: any = {}, params?: any): Observable<any> {
        return this.http.put(this.createUrl(endpoint), JSON.stringify(model), {
            headers: this.headers(),
            params: params,
        });
    }

    /**
     * post()
     * @param endpoint
     * @param model
     */
    public post(endpoint: string, model: any = {}): Observable<any> {
        return this.http.post(this.createUrl(endpoint), JSON.stringify(model), { headers: this.headers() });
    }
    /**
     * patch()
     * @param endpoint
     * @param model
     */
    public patch(endpoint: string, model: any = {}): Observable<any> {
        return this.http.patch(this.createUrl(endpoint), JSON.stringify(model), { headers: this.headers() });
    }

    /**
     * delete()
     * @param endpoint
     * @param params
     */
    public delete(endpoint: string, params: any = {}): Observable<any> {
        return this.http.delete(this.createUrl(endpoint), {
            params: params,
        });
    }

    //
    // headers()
    //
    private headers(): HttpHeaders {
        return new HttpHeaders().set('Content-Type', 'application/json');
    }

    //
    //
    //
    constructor(private http: HttpClient) {
        this.server = '';
        this.port = '';
        this.prefix = '';
        this.secure = false;
    }
}
