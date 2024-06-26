import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _router:Router) { }

  isLoggedIn(){
    const isLoggedIn = localStorage.getItem('accessToken')?true:false;
    return isLoggedIn;
  }

  getRefreshToken(){
    const refreshToken = localStorage.getItem('refreshToken');
    return refreshToken;
  }

  logout() {
    localStorage.removeItem('accessToken');
    this._router.navigate(['/auth']);
  }

  getRole(){
    return localStorage.getItem('role');
  }

  getUserName(){
    return localStorage.getItem('username');
  }
}
