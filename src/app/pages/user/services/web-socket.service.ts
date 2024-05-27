import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { ChatResponseModel } from '../models/chat.models';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  baseUrl = 'https://api.freeapi.app/api/v1/chat-app/chats';
  constructor(private _http: HttpClient) { }
  private socket = io(this.baseUrl)

  joinPrivateRoom(recieverId:string):Observable<ChatResponseModel> {
    return this._http.post<ChatResponseModel>(`${this.baseUrl}/c/${recieverId}`,recieverId)
    // this.socket.emit('join', data); 
  }
  sendPrivateMessage(chatId:string,content: FormData) {
    return this._http.post(`https://api.freeapi.app/api/v1/chat-app/messages/${chatId}`,content)    
  }



}
