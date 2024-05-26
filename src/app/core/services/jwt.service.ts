import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private _http: HttpClient, private _commonService: CommonService){ }

  URL_AUTH_REFRESH: string = 'https://api.freeapi.app/api/v1/users/refresh-token'
  REFRESH_TOKEN = this._commonService.getRefreshToken();

  refreshToken(){
    return this._http.post(`${this.URL_AUTH_REFRESH}`, this.REFRESH_TOKEN);
  }
}
