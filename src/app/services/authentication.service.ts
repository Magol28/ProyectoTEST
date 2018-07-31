import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {LoginObject} from "../Class/logObject";
import {Session} from "../Class/session";

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  private basePath = '/api/authenticate/';

  login(loginObj: LoginObject): Observable<Session> {
    return this.http.post(this.basePath + 'login', loginObj).map(this.extractData);
  }

  logout(): Observable<Boolean> {
    return this.http.post(this.basePath + 'logout', {}).map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
}
