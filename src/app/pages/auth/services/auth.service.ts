import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationData, RegistrationResponse } from '../models/registration-data.model';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-data.model';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }
  private api:string = 'https://api.freeapi.app/api/v1';
  testUrl = 'http://localhost:3001'
  // userRegistration(data: RegistrationData):Observable<RegistrationResponse>{
  //  return  this._http.post<RegistrationResponse>(`${this.api}/users/register`,data);
  // }
login(data:any):Observable<Login>{
  return  this._http.post<Login>(`${this.testUrl}/auth/password_login`,data)
}
  register(data:any){
    return  this._http.post(`${this.testUrl}/auth/register`,data);
  }
  // userLogin(data: any):Observable<LoginResponse>{
  //   return  this._http.post<LoginResponse>(`${this.testUrl}/auth/password_login`,data);//https://api.freeapi.app/api/v1/users/login
  // }
}
