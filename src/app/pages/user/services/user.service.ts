import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../auth/models/login-data.model';
import { HttpClient } from '@angular/common/http';
import { AvailableUser, AvailableUserResponse, ChatMessage, ChatMessageResponse, ChatResponseModel, chatsModel } from '../models/chat.models';
import { AllUsers } from '../../auth/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl:string = 'https://api.freeapi.app/api/v1/chat-app';
  baseUrl = 'http://localhost:3001'

  constructor(private _http: HttpClient) { }

  getAllUsers():Observable<AvailableUserResponse>{
    return this._http.get<AvailableUserResponse>(`${this.apiUrl}/chats/users`);
  }
  allUsers():Observable<AllUsers>{
    return this._http.get<AllUsers>(`${this.baseUrl}/profile/allUser`)
  }
  getAllChats():Observable<ChatResponseModel>{
    return this._http.get<ChatResponseModel>(`${this.apiUrl}/chats`);
  }

  getPrivateChat(chatRoomId: string):Observable<ChatMessageResponse>{
    return this._http.get<ChatMessageResponse>(`${this.apiUrl}/messages/${chatRoomId}`);
  }

  getChatRoomsChat(chatroom:any):Observable<ChatMessage[]>{
    return this._http.get<ChatMessage[]>(`${this.baseUrl}/auth/chatroom?room=${chatroom}`);
  }
  
}
