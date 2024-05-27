import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../auth/models/login-data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl:string = 'https://api.freeapi.app/api/v1/chat-app';

  constructor(private _http: HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this._http.get<User[]>(`${this.apiUrl}/chats/users`);
  }
}