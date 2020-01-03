import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../other/interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }
  api_url: string = ''

  login(user:string,pwd:string):Observable<LoginResponse>{
    pwd = btoa(pwd)
    return this._http.post<LoginResponse>(`${this.api_url}/auth/login`,{
      user :  user,
      password: pwd
    });

  }
}
