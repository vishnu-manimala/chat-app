import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _router:Router) { }

  isLoggedIn(){
    const isLoggedIn = localStorage.getItem('accessToke')?true:false;
    return isLoggedIn;
  }

  logout() {
    localStorage.removeItem('accessToken');
    this._router.navigate(['/auth']);
  }
}
