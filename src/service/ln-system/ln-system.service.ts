import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//
// @Lernender Library
//
import { Library, Response } from '@lernender/core';
//
// HttpService
//
import { LnHttpClientService } from '@service/ln-http/ln-http-client.service';
import { LnHttpEnvironmentService } from '@service/ln-http/ln-http-environment.service';
import { LnHttpService } from '@service/ln-http/ln-http.service';
//
// Model
//
import { System } from '@model/spinal-fusion-system';
//
// LnSystemService
//
@Injectable()
export class LnSystemService extends LnHttpService {
    //
    // Rest API Endpoint
    //
    static readonly GET_API: string = 'system';

    /**
     * getByCode()
     */
    public Get(params: object): Observable<Response<System>> {
        return super.get<System>(LnSystemService.GET_API, this._map, params);
    }

    /**
     * put()
     */
    public Put(model: System): Observable<Response<System>> {
        return super.put<System>(LnSystemService.GET_API, model, this._map, null);
    }

    /**
     * post()
     */
    public Post(model: any): Observable<Response<System>> {
        return super.post<System>(LnSystemService.GET_API, model, this._map);
    }

    /**
     * patch()
     */
    public Patch(model: any): Observable<Response<System>> {
        return super.patch<System>(LnSystemService.GET_API, model, this._map);
    }

    /**
     * delete()
     */
    public Delete(params: object): Observable<Response<System>> {
        return super.delete<System>(LnSystemService.GET_API, params, this._map);
    }

    /**
     * _map()
     */
    private _map(item: any): System {
        return new System(item);
    }

    /**
     * Function: constructor()
     */
    constructor(http: LnHttpClientService, environment: LnHttpEnvironmentService) {
        super(http);
        //
        // constructApiEndpoint
        //
        this.constructApiEndpoint(environment);
    }
}
