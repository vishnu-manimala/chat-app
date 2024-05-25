import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationData, RegistrationResponse } from '../models/registration-data.model';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }
  private api:string = 'https://api.freeapi.app/api/v1';
  userRegistration(data: RegistrationData):Observable<RegistrationResponse>{
   return  this._http.post<RegistrationResponse>(`${this.api}/users/register`,data);
  }

  userLogin(data: any):Observable<LoginResponse>{
    return  this._http.post<LoginResponse>(`https://api.freeapi.app/api/v1/users/login`,data);
  }
}
