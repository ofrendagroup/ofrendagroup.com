import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LnJsonService {
    //
    // get()
    //
    public get(file: string): Observable<any[]> {
        return this.httpClient.get<any[]>(file);
    }
    //
    // Constructor
    //
    constructor(private httpClient: HttpClient) {}
}
