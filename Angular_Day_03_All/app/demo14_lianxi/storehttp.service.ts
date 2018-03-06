import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StoreHttpService {
    constructor(private http: Http) { }

    sendGet(myUrl:string){
        // a-http-get
        return this.http.get(myUrl)
            .map((response: Response) => response.json());
    }
    
}