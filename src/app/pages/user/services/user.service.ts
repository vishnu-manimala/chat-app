import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../auth/models/login-data.model';
import { HttpClient } from '@angular/common/http';
import { AvailableUser, AvailableUserResponse, ChatMessageResponse, chatsModel } from '../models/chat.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl:string = 'https://api.freeapi.app/api/v1/chat-app';

  constructor(private _http: HttpClient) { }

  getAllUsers():Observable<AvailableUserResponse>{
    return this._http.get<AvailableUserResponse>(`${this.apiUrl}/chats/users`);
  }

  getAllChats():Observable<chatsModel>{
    return this._http.get<chatsModel>(`${this.apiUrl}/chats`);
  }

  getPrivateChat(chatRoomId: string):Observable<ChatMessageResponse>{
    return this._http.get<ChatMessageResponse>(`${this.apiUrl}/messages/${chatRoomId}`);
  }
  
}
